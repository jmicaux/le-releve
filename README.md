# Le Relevé — Les comptes de la France

Une application web légère pour **comprendre les finances publiques françaises en 5 minutes**.
Vue d'ensemble du budget, où va l'argent, d'où il vient et comment la dette a évolué —
chaque chiffre traduit en repère concret **par habitant**, sans jargon. Pas de build, pas de
backend : des fichiers statiques et des données officielles 2026 embarquées.

[![CI](https://github.com/jmicaux/le-releve/actions/workflows/ci.yml/badge.svg)](https://github.com/jmicaux/le-releve/actions/workflows/ci.yml) ![version](https://img.shields.io/badge/version-0.8.7-blue) ![vanilla](https://img.shields.io/badge/stack-vanilla_JS-f7df1e) ![no build](https://img.shields.io/badge/build-aucun-brightgreen) ![data](https://img.shields.io/badge/données-PLF_2026_+_INSEE-3b82f6)

**🔗 Aperçu en ligne : [jmicaux.github.io/le-releve](https://jmicaux.github.io/le-releve/)**

Si cette app te plaît, tu peux la soutenir :

[![Buy Me A Coffee](https://img.shields.io/badge/Buy_me_a_coffee-ffdd00?style=flat-square&logo=buymeacoffee&logoColor=1a1a1a)](https://buymeacoffee.com/jmicaux)

> Prototype orienté **expérience visuelle** (façon Apple Health / Linear) plutôt que
> portail Open Data. Vanilla JS, zéro dépendance runtime (hors ECharts pour les graphiques).

## Fonctionnalités

- **Vue d'ensemble** (`index.html`) — les grands agrégats du budget 2026 en un écran,
  chaque montant traduit en euros **par habitant** pour rester lisible.
- **Sorties** (`sorties.html`) — où va l'argent : grands postes **et** niveaux officiels
  (mission / programme / action), avec drill-down, URLs bookmarkables (`#/…`), et double
  lecture par ligne (part du niveau + part du total). Bascule barres / donut (ECharts).
- **Entrées** (`entrees.html`) — d'où vient l'argent : recettes de l'État en drill-down,
  avec la même double lecture.
- **Dette** (`dette.html`) — l'évolution **1980 → 2026**, mise en perspective.
- **Aucun chiffre en dur** — toutes les vues sont pilotées par les données (`data/*.json`,
  embarquées via `assets/js/data.js`), jamais codées dans le HTML.
- **Thème clair / sombre** — bascule manuelle (☀️/🌙) persistée en `localStorage`, l'OS comme
  défaut, deep-link `?theme=dark` / `?theme=light`. Les graphiques ECharts se re-colorient à la volée.
- **Accessible** — construit **a11y-compliant** (WCAG AA) dès la V0.1.

## Installation & usage

L'app est entièrement statique. Ouvre simplement **`index.html`** dans un navigateur
(double-clic) : les données sont embarquées dans `assets/js/data.js` (script classique),
donc pas de `fetch` ni d'ES modules bloqués en `file://`.

Pour le rendu servi ou pour mettre à jour les données (Node ≥ 18) :

```bash
npm run serve   # sert le site sur http://localhost:5173
npm run data    # récupère les API publiques → data/*.json puis régénère assets/js/data.js
npm run build   # régénère assets/js/data.js à partir des JSON (sans appel réseau)
```

`assets/js/data.js` est généré à partir des fichiers `data/*.json`. Après avoir modifié un
JSON, lance `npm run build`.

## Sources de données

Chiffres **officiels 2026**, jamais inventés. Voir [DATA.md](DATA.md) pour le détail des
sources et du périmètre (État vs administrations publiques).

- **Agrégats (vue d'ensemble)** — loi de finances 2026 + INSEE (`data/budget.json`).
- **Répartition des dépenses** — [API Opendatasoft du Ministère de l'Économie](https://data.economie.gouv.fr/)
  (`plf-2026-budget-vert`), snapshot dans `data/expenses.json` (+ `data/cofog.json` pour la
  nomenclature par fonction).
- **Recettes** — `data/revenues.json`. **Dette** — `data/debt.json`. **Sources** — `data/sources.json`.

Les données sont récupérées au build (et, quand disponible, en direct dans le navigateur avec
repli sur le snapshot embarqué).

## Structure du projet

```
le-releve/
├── index.html            # Vue d'ensemble
├── entrees.html          # Entrées (recettes)
├── sorties.html          # Sorties (dépenses)
├── dette.html            # Dette 1980 → 2026
├── assets/css/           # design system (base.css, styles.css)
├── assets/js/            # app.js, datasource.js, theme.js, data.js (généré)…
├── data/                 # budget / expenses / revenues / debt / cofog / sources .json
└── scripts/              # fetch-data.mjs, build.mjs, serve.mjs (Node natif)
```

## Versioning

La version est définie une seule fois dans `assets/js/version.js` (`VERSION`), affichée dans
le badge d'entête (clic → notes de version). Bump à chaque release selon
[semver](https://semver.org/), en tenant à jour `CHANGELOG.md`, `version.js` et le badge
ci-dessus ensemble.

## Qualité

Ce projet suit un processus de revue documenté couvrant l'accessibilité, la sécurité, la
performance et la qualité du code.

Voir [QUALITY.md](QUALITY.md).

## Licence

Sous [PolyForm Noncommercial License 1.0.0](LICENSE.md) : tu peux forker, modifier et
partager ce projet **à des fins non commerciales**, à condition de conserver l'attribution
(`Required Notice: Copyright jmicaux`). L'usage commercial n'est pas autorisé.

Signalement de vulnérabilité : voir [SECURITY.md](SECURITY.md). Contribuer : voir
[CONTRIBUTING.md](CONTRIBUTING.md).

## Crédits

Données : loi de finances 2026, [Ministère de l'Économie](https://data.economie.gouv.fr/) et
[INSEE](https://www.insee.fr/). Ce produit utilise des données ouvertes publiques et n'est
affilié à aucune administration.

Prototype conçu avec l'aide de [Claude](https://claude.ai/code) (Anthropic).
