# Données & sources

Tous les chiffres sont **officiels** et sourcés. Deux niveaux coexistent —
il est important de ne pas les confondre :

| Niveau | Ce que ça couvre | Ordre de grandeur 2026 |
| --- | --- | --- |
| **Administrations publiques (APU)** | État + Sécurité sociale + collectivités | dépenses ≈ 1 600 Md€ |
| **Budget de l'État** | l'État seul (missions/programmes) | crédits ≈ 480 Md€ |

## Écran 1 — Vue d'ensemble (`data/budget.json`)

Niveau **APU**, car c'est le sens de « les comptes de la France » pour un citoyen.
Chiffres arrondis, issus de :

- **Loi de finances 2026** (LOI n° 2026-103 du 19 février 2026) — déficit public
  152,5 Md€, objectif ramené à 4,7 % du PIB (après 5,4 % en 2025) ; dépense
  publique ≈ 56,4 % du PIB ; prélèvements obligatoires ≈ 43,6 % du PIB.
- **INSEE**, comptes nationaux trimestriels — dette publique ≈ 3 547 Md€
  (117,5 % du PIB à fin T1 2026).

## Écran 2 — Où va notre argent ? (`data/expenses.json`)

Niveau **budget de l'État**, données **en direct** de l'API publique :

- Jeu de données : `plf-2026-budget-vert` (Ministère de l'Économie).
- Portail : data.economie.gouv.fr (Opendatasoft).
- Agrégation : crédits budgétaires (CP) du PLF 2026 sommés par mission, puis
  regroupés en grands postes lisibles. Total ≈ 479,5 Md€.
- Reproductible : `npm run data`.

## Références

Voir `data/sources.json` (affiché dans le pied de page du prototype) pour les URL.

> ⚠️ Les regroupements « État » et « APU » n'ont pas le même périmètre : un poste
> comme les retraites apparaît bien plus élevé au niveau APU (Sécurité sociale)
> qu'au niveau des seules pensions de l'État. Chaque écran précise son niveau.
