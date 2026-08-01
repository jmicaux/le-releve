# Le Relevé — Les comptes de la France

> Comprendre les finances publiques françaises en 5 minutes.

Prototype **V0.1** : expérience visuelle (façon Apple Health / Linear) plutôt
que portail Open Data. Vanilla JS, **zéro dépendance runtime** — seules des
librairies graphiques seront ajoutées pour les visualisations avancées
(Sankey, barres animées) des écrans suivants.

## État d'avancement

| Écran | Statut |
| --- | --- |
| 1 · Vue d'ensemble | ✅ V0.1 |
| 2 · Où va notre argent ? | ✅ V0.1 (4 vues : grands postes + niveaux officiels mission/programme/action ; drill-down sur grands postes, n° de ligne, URLs bookmarkables `#/…`, bar + donut, ECharts) |
| 3 · D'où vient l'argent ? | ⏳ à venir |
| 4 · Cette année | ⏳ à venir |
| 5 · Comprendre le déficit | ⏳ à venir |

## Démarrer

Ouvre simplement **`index.html`** dans un navigateur (double-clic). Aucun
serveur requis : les données sont embarquées dans `assets/js/data.js` (script
classique), donc pas de `fetch` ni d'ES modules bloqués en `file://`.

### Mettre à jour les données

```bash
npm run data    # récupère l'API data.gouv/Bercy → data/expenses.json puis régénère data/js
npm run build   # régénère assets/js/data.js à partir des JSON (sans appel réseau)
npm run serve   # optionnel : sert le site en http://localhost:5173
```

`assets/js/data.js` est généré à partir des fichiers `data/*.json`. Après avoir
modifié un JSON, lance `npm run build`.

## Données

Chiffres **officiels 2026**, jamais inventés. Voir [DATA.md](./DATA.md) pour le
détail des sources et du niveau (État vs administrations publiques).

- Agrégats de l'écran 1 : loi de finances 2026 + INSEE (`data/budget.json`).
- Répartition des dépenses : **API Opendatasoft du Ministère de l'Économie**
  (`plf-2026-budget-vert`), snapshot dans `data/expenses.json`.

## Thème clair / sombre

Bascule manuelle (bouton ☀️/🌙 en haut à droite), persistée en `localStorage`,
avec l'OS comme défaut. Géré via `data-theme` sur `<html>` +
`prefers-color-scheme` (voir `assets/js/theme.js`). Les graphiques ECharts se
re-colorient à la volée. Deep-link : `?theme=dark` / `?theme=light`.

## Architecture

```
le-releve/
├── index.html            # Écran 1
├── assets/css/styles.css # design system
├── assets/js/            # app.js, counters.js (ES modules)
├── data/                 # budget.json, expenses.json, sources.json
└── scripts/              # fetch-data.mjs, serve.mjs (Node natif)
```

## Qualité

Standards du projet (accessibilité, données, perf) : [QUALITY.md](./QUALITY.md).
Prototype construit **a11y-compliant** (WCAG AA) dès la V0.1.

## Crédits

Prototype conçu avec l'aide de **Claude** (Anthropic).

## Licence

[PolyForm Noncommercial 1.0.0](./LICENSE.md) — usage non commercial.
Signalement de vulnérabilité : voir [SECURITY.md](./SECURITY.md).
Contribuer : voir [CONTRIBUTING.md](./CONTRIBUTING.md).
