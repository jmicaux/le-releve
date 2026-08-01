/**
 * Atlas — récupération des données publiques (aucune dépendance externe).
 *
 * Source : API Opendatasoft du Ministère de l'Économie (data.economie.gouv.fr),
 * jeu de données « PLF 2026 - Budget vert ». On récupère toutes les lignes de
 * crédits budgétaires (mission → programme → action) et on construit :
 *   - items         : grands postes regroupés (niveau d'accueil)
 *   - missions      : missions à plat (proxy ministères)
 *   - tree          : arbre par grand poste → mission → programme → action
 *   - missionsTree  : arbre par mission → programme → action
 * pour permettre le drill-down « de plus en plus profond ».
 *
 * Usage : node scripts/fetch-data.mjs      Écrit : data/expenses.json
 * Node 18+ requis (fetch natif).
 */

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "data");

const DATASET =
  "https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/plf-2026-budget-vert";
const EXPORT = `${DATASET}/exports/json`;

// Regroupement de quelques missions proches en grands postes lisibles. Les
// autres missions ne sont PAS bundlées : elles remontent individuellement à la
// racine, à côté des grands postes (voir buildPostesTree).
const GROUPS = [
  { key: "retraites", label: "Retraites & pensions", missions: ["Pensions", "Régimes sociaux et de retraite"] },
  { key: "education", label: "Éducation & recherche", missions: ["Enseignement scolaire", "Recherche et enseignement supérieur"] },
  { key: "defense", label: "Défense & anciens combattants", missions: ["Défense", "Monde combattant, mémoire et liens avec la Nation"] },
  { key: "collectivites", label: "Collectivités territoriales", missions: ["PSRCT", "Relations avec les collectivités territoriales"] },
  { key: "solidarite", label: "Solidarité & santé", missions: ["Solidarité, insertion et égalité des chances", "Santé"] },
  { key: "ue", label: "Union européenne", missions: ["PSRUE"] },
  { key: "territoires", label: "Cohésion des territoires", missions: ["Cohésion des territoires"] },
  { key: "ecologie", label: "Écologie & mobilités", missions: ["Écologie, développement et mobilité durables"] },
  { key: "securite", label: "Sécurité & justice", missions: ["Sécurités", "Justice", "Immigration, asile et intégration"] },
  { key: "travail", label: "Travail & emploi", missions: ["Travail, emploi et administration des ministères sociaux"] },
];

async function fetchAllRows() {
  const params = new URLSearchParams({
    where: 'type_depense="Crédits budgétaires"',
    select:
      "mission, programme, action_si_credit_budgetaire as action, plf_2026_cp_ou_prevision_2026_si_depense_fiscale as cp",
  });
  const res = await fetch(`${EXPORT}?${params}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`API ${res.status} ${res.statusText}`);
  return res.json();
}

const round = (n) => Math.round(n);
const bySizeDesc = (a, b) => b.amount - a.amount;

// mission → programme → action, à partir des lignes brutes.
function buildMissionsTree(rows) {
  const missions = new Map();
  for (const r of rows) {
    if (!r.mission) continue;
    const cp = r.cp || 0;
    let m = missions.get(r.mission);
    if (!m) missions.set(r.mission, (m = { label: r.mission, amount: 0, progs: new Map() }));
    m.amount += cp;

    const pgLabel = r.programme || "Autres crédits";
    let pg = m.progs.get(pgLabel);
    if (!pg) m.progs.set(pgLabel, (pg = { label: pgLabel, amount: 0, actions: new Map() }));
    pg.amount += cp;

    const acLabel = r.action || "Autres crédits";
    const ac = pg.actions.get(acLabel);
    if (!ac) pg.actions.set(acLabel, { label: acLabel, amount: cp });
    else ac.amount += cp;
  }

  // On garde les lignes négatives (ex. « T2 - contribution au CAS » : la part
  // retraites du personnel, comptée sur la mission Pensions) : sans elles, les
  // actions ne sommeraient plus au montant du programme. On retire seulement
  // les lignes à zéro, et la mission purement technique T3_CAS (solde de CAS).
  const nonzero = (n) => n.amount !== 0;
  const positive = (n) => n.amount > 0;

  const toNode = (m) => ({
    label: m.label,
    amount: round(m.amount),
    children: [...m.progs.values()]
      .map((pg) => ({
        label: pg.label,
        amount: round(pg.amount),
        children: [...pg.actions.values()]
          .map((a) => ({ label: a.label, amount: round(a.amount) }))
          .filter(nonzero)
          .sort(bySizeDesc),
      }))
      .filter(nonzero)
      .sort(bySizeDesc),
  });

  return [...missions.values()].map(toNode).filter(positive).sort(bySizeDesc);
}

// grands postes (quelques regroupements) + missions non regroupées, toutes à
// la racine (pas de fourre-tout « Autres »).
function buildPostesTree(missionNodes) {
  const used = new Set();
  const postes = [];
  for (const g of GROUPS) {
    const children = [];
    let amount = 0;
    for (const label of g.missions) {
      const mn = missionNodes.find((x) => x.label === label);
      if (mn) {
        children.push(mn);
        amount += mn.amount;
        used.add(label);
      }
    }
    if (children.length)
      postes.push({ key: g.key, label: g.label, amount, children: children.sort(bySizeDesc) });
  }

  // Les missions non regroupées remontent telles quelles à la racine.
  for (const m of missionNodes) if (!used.has(m.label)) postes.push(m);

  return postes.sort(bySizeDesc);
}

function build(rows) {
  const missionsTree = buildMissionsTree(rows);
  const tree = buildPostesTree(missionsTree);
  const totalAll = missionsTree.reduce((a, m) => a + m.amount, 0);

  const withShare = (node) => ({
    ...node,
    share: node.amount / totalAll,
    per1000: Math.round((node.amount / totalAll) * 1000),
  });

  // Vues « à plat » (compat écran 2) : sans les enfants.
  const items = tree.map(({ key, label, amount }) =>
    withShare({ key, label, amount })
  );
  const missions = missionsTree.map(({ label, amount }) =>
    withShare({ label, amount })
  );

  return {
    meta: {
      title: "Dépenses du budget de l'État — PLF 2026 (crédits budgétaires)",
      unit: "EUR",
      totalCreditsBudgetaires: round(totalAll),
      source: {
        name: "PLF 2026 - Budget vert, Ministère de l'Économie",
        dataset: "plf-2026-budget-vert",
        portal: "data.economie.gouv.fr",
        api: EXPORT,
        fetchedAt: new Date().toISOString(),
        note:
          "Crédits budgétaires (CP) du PLF 2026, hiérarchie mission → programme → action, regroupée en grands postes. Niveau : budget de l'État.",
      },
    },
    items,
    missions,
    tree,
    missionsTree,
  };
}

async function main() {
  console.log("→ Récupération des dépenses PLF 2026 (toutes lignes)…");
  const rows = await fetchAllRows();
  console.log(`  ${rows.length} lignes récupérées.`);
  const out = build(rows);
  const path = join(DATA_DIR, "expenses.json");
  await writeFile(path, JSON.stringify(out, null, 2) + "\n", "utf8");
  console.log(
    `✓ ${path}  (total ${(out.meta.totalCreditsBudgetaires / 1e9).toFixed(1)} Md€, ` +
      `${out.tree.length} postes, ${out.missionsTree.length} missions)`
  );
}

main().catch((err) => {
  console.error("✗ Échec :", err.message);
  process.exit(1);
});
