# Changelog — Le Relevé

Toutes les versions notables sont documentées ici. Ce projet suit
[semver](https://semver.org/) et le format [Keep a Changelog](https://keepachangelog.com/fr/).

Le badge de version (entête) ouvre ces notes dans l'app. La source affichée dans l'app est
`assets/js/version.js` (embarquée, fonctionne hors-ligne).

## 0.8.7 — 2026-07-30

### Added
- **Entrées** et **Sorties** : en drill-down, chaque ligne affiche **les deux lectures** — sa part du niveau (« 56,6 % sur 693 Md ») **et** sa part du grand total (« 23,4 % du total »). Au niveau racine, une seule (les deux seraient identiques).

## 0.8.6 — 2026-07-30

### Fixed
- **Entrées** et **Sorties** : en drill-down, le pourcentage se calcule sur le **total du niveau affiché** (les lignes somment à 100 %) et non plus sur le grand total. Le « sur X Md » suit le niveau (ex. « 56,6 % sur 693 Md » dans *Protection sociale*).

## 0.8.5 — 2026-07-30

### Changed
- **Sorties** : libellés du switch plus clairs et parallèles — **« Détail des dépenses publiques »** et **« Détail des dépenses de l'État »** (au lieu de « À quoi sert l'argent » / « Détail du budget de l'État »).

## 0.8.4 — 2026-07-30

### Added
- **Entrées** et **Sorties** : bouton **« ‹ Retour »** au-dessus de la liste (visible en drill-down) pour remonter d'un niveau, sans remonter au fil d'Ariane en haut de page.

## 0.8.3 — 2026-07-30

### Changed
- **Entrées** et **Sorties** : chaque ligne affiche sa **part du grand total en pourcentage** (ex. « **41,4 %** sur **1 672 Md** ») au lieu de « € sur 100 ». Le dénominateur est le grand total du périmètre affiché.

## 0.8.1 — 2026-07-29

### Changed
- Notes de version affichées **par sections** (Added/Changed/Fixed/Removed) dans l'app, comme ce fichier.

## 0.8.0 — 2026-07-29

### Changed
- **Un seul total** pour l'argent public : ~**1 672 Md€** partout (fin du « 1 600 vs 1 672 »). Entrées **1 520 Md€**, écart **152 Md€**, cohérent avec la LFI 2026.

### Removed
- **« Par habitant » retiré** partout (échelle, KPI, colonnes de lignes) : moyenne trompeuse. On conserve « en euros » et « sur 100 € ».

## 0.7.1 — 2026-07-29

### Added
- Fil d'Ariane sur la page Dette ; carte « pièges de lecture » sur la différence de référentiel/année.

### Changed
- Identité visuelle propre à l'app (icône €) ; carte Sorties de l'accueil et accroches mises à jour.

### Removed
- Étiquettes de contexte redondantes (chips section · périmètre · année) sur Accueil, Entrées et Dette.

## 0.7.0 — 2026-07-29

### Added
- **Sorties — vue « À quoi sert l'argent »** : ~1 672 Md€ ventilés par fonction (retraites, hôpitaux, intérêts de la dette…), **Eurostat/COFOG 2024**, en direct + cache + repli hors-ligne.

### Changed
- La vue **« Détail du budget de l'État »** (486 Md€, 2026, 688 lignes) devient la seconde vue de Sorties, accessible d'un bouton.

## 0.6.0 — 2026-07-29

### Changed
- **Un seul point de vue** : « tout l'argent public ». Fin de la bascule État/APU sur Entrées ; TVA en un seul chiffre. Titres « Le relevé des… » (au lieu de « Votre »).

## 0.5.2 — 2026-07-29

### Removed
- **Page Solde** : contenu redondant avec l'accueil (relevé de l'année) et la page Dette.

## 0.5.1 — 2026-07-29

### Changed
- **Nouveau fil d'Ariane** : pleine largeur en haut de page, icône maison, séparateurs `›`, niveau courant en gras (`aria-current`). Remplace l'ancien fil en cartes (Sorties et Entrées).
- **Sigles traduits** en clair (PSRCT → « Reversements aux collectivités territoriales », PSRUE → « Contribution à l'Union européenne »…) ; les URL restent sur l'identifiant brut.

## 0.5.0 — 2026-07-29

### Added
- **URL bookmarkable** : chaque niveau de détail (Sorties et Entrées) a son adresse (`#/themes/education-recherche`, `#/lignes?f=handicap`) ; **Précédent / Suivant** du navigateur fonctionnent ; lien profond restauré au chargement.

### Changed
- Adresses par **identifiants stables** (nom de la ligne) plutôt que par position.
- Page **Sorties renommée** (`sorties.html`) ; `depenses.html` redirige.

### Fixed
- **Contrastes AA** : texte secondaire (`--mute`) renforcé en thème clair et sombre.

## 0.4.0 — 2026-07-29

### Added
- Écran **Solde** : entrées − sorties, financement de l'écart, et les deux lectures du déficit.
- **Sorties** : badge de provenance des données (appel direct / cache / instantané) + bouton **Rafraîchir** + délai d'attente sur le fetch.
- Badge de version **cliquable** (ces notes).

### Fixed
- **Accessibilité** : noms accessibles des lignes et segments, table de données sous le graphe Dette, focus déplacé au drill-down.

## 0.3.0 — 2026-07-29

### Added
- Portage du **nouveau design** dans les 4 pages (thème clair/sombre, Instrument Sans, palette des maquettes).
- Rendu **piloté par les données** ; Sorties en **fetch live** de l'API Bercy + **cache localStorage**, repli sur instantané embarqué.

### Changed
- **Cache-busting** des assets (`?v=`).
