/**
 * Le Relevé — dépenses publiques par fonction (COFOG), toutes administrations.
 * Source : Eurostat gov_10a_exp (dépense totale TE, secteur S13 = toutes APU,
 * France, en millions d'euros), libellés en français (lang=fr).
 * Construit un arbre à 2 niveaux : 10 grandes fonctions → sous-fonctions.
 *
 * Usage : node scripts/fetch-cofog.mjs   Écrit : data/cofog.json
 * Node 18+ (fetch natif).
 */
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "data");
const BASE = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/gov_10a_exp";

// Noms courts, sans jargon, pour les 10 grandes fonctions (remplacent le libellé Eurostat).
const TOP_FR = {
  GF01: "Services publics généraux",
  GF02: "Défense",
  GF03: "Sécurité et justice",
  GF04: "Action économique",
  GF05: "Environnement",
  GF06: "Logement et cadre de vie",
  GF07: "Santé",
  GF08: "Culture, sport et loisirs",
  GF09: "Éducation",
  GF10: "Protection sociale"
};

function url(year) {
  const p = new URLSearchParams({
    format: "JSON", lang: "fr", unit: "MIO_EUR", na_item: "TE", sector: "S13", geo: "FR", time: String(year)
  });
  return `${BASE}?${p}`;
}

async function fetchYear(year) {
  const res = await fetch(url(year), { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Eurostat ${res.status} ${res.statusText}`);
  return res.json();
}

// JSON-stat : toutes les dimensions sont singletons sauf cofog99 → l'index plat
// d'un code = sa position dans la dimension cofog99.
function readValues(j) {
  const cat = j.dimension.cofog99.category;
  const idx = cat.index;   // code -> position
  const lab = cat.label;   // code -> libellé (fr)
  const val = j.value;     // position -> montant (M€)
  const out = {};
  for (const code of Object.keys(idx)) {
    const v = val[idx[code]];
    if (v !== undefined && v !== null) out[code] = { amount: Math.round(v * 1e6), label: lab[code] || code };
  }
  return out;
}

function buildTree(vals) {
  const tops = Object.keys(vals).filter((c) => /^GF\d\d$/.test(c)).sort();
  const tree = tops.map((code) => {
    const kids = Object.keys(vals)
      .filter((c) => c.length === 6 && c.startsWith(code) && vals[c].amount > 0)
      .map((c) => ({ label: vals[c].label, amount: vals[c].amount }))
      .sort((a, b) => b.amount - a.amount);
    return { key: code, label: TOP_FR[code] || vals[code].label, amount: vals[code].amount, children: kids };
  }).filter((n) => n.amount > 0).sort((a, b) => b.amount - a.amount);
  const total = (vals.TOTAL && vals.TOTAL.amount) || tree.reduce((s, n) => s + n.amount, 0);
  return { tree, total };
}

async function main() {
  let year = null, data = null;
  for (const y of [2025, 2024, 2023]) {
    console.log(`→ Eurostat COFOG ${y}…`);
    const j = await fetchYear(y);
    const vals = readValues(j);
    if (vals.TOTAL || Object.keys(vals).some((c) => /^GF\d\d$/.test(c))) { year = y; data = vals; break; }
  }
  if (!data) throw new Error("Aucune année COFOG disponible.");
  const { tree, total } = buildTree(data);

  const out = {
    meta: {
      year,
      scope: "Toutes les administrations publiques (État, Sécurité sociale, collectivités)",
      unit: "EUR",
      population: 68600000,
      classification: "Dépenses par fonction (COFOG)",
      total,
      note: "Dépenses de toutes les administrations publiques ventilées par fonction (« à quoi sert l'argent »), classification COFOG. Dernière année disponible : " + year + ". Les montants 2026 (budget) ne sont pas encore ventilés par fonction ; c'est une statistique établie après coup.",
      source: { portal: "ec.europa.eu/eurostat", dataset: "gov_10a_exp", api: url(year), fetchedAt: new Date().toISOString() }
    },
    tree
  };
  const path = join(DATA_DIR, "cofog.json");
  await writeFile(path, JSON.stringify(out, null, 2) + "\n", "utf8");
  console.log(`✓ ${path}  (année ${year}, total ${(total / 1e9).toFixed(0)} Md€, ${tree.length} fonctions)`);
}

main().catch((e) => { console.error("✗", e.message); process.exit(1); });
