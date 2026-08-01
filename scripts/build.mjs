/**
 * Atlas — génère assets/js/data.js à partir des fichiers data/*.json.
 *
 * Objectif : permettre l'ouverture directe de index.html en file:// (sans
 * serveur). Les données sont exposées via window.ATLAS (script classique),
 * ce qui évite fetch() et les ES modules, bloqués par CORS en file://.
 *
 * Usage : node scripts/build.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

async function readJSON(rel) {
  return JSON.parse(await readFile(join(root, rel), "utf8"));
}

async function main() {
  const [budget, expenses, sources, revenues, debt, cofog] = await Promise.all([
    readJSON("data/budget.json"),
    readJSON("data/expenses.json"),
    readJSON("data/sources.json"),
    readJSON("data/revenues.json"),
    readJSON("data/debt.json"),
    readJSON("data/cofog.json"),
  ]);

  const payload = { budget, expenses, debt, revenues, cofog, sources: sources.sources };
  const out =
    "/* Généré par scripts/build.mjs — ne pas éditer à la main. */\n" +
    "window.ATLAS = " +
    JSON.stringify(payload, null, 2) +
    ";\n";

  await writeFile(join(root, "assets/js/data.js"), out, "utf8");
  console.log("✓ assets/js/data.js généré.");
}

main().catch((e) => {
  console.error("✗", e.message);
  process.exit(1);
});
