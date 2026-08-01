# Standards de qualité — Atlas

Ces standards s'appliquent à chaque écran et à chaque contribution.

## Accessibilité (WCAG 2.1 AA)

- HTML sémantique (`main`, `header`, `nav`, `section`, titres hiérarchisés).
- Lien d'évitement, focus visible (`:focus-visible`), navigation clavier complète.
- Contrastes AA vérifiés en thèmes clair **et** sombre.
- `prefers-reduced-motion` respecté : toutes les animations sont désactivées.
- Emojis décoratifs en `aria-hidden`; chaque carte porte un `aria-label` lisible.
- Zones dynamiques annoncées (`aria-live` sur la phrase d'insight).

## Données

- **Aucun chiffre inventé.** Toute valeur est sourcée (voir `DATA.md`).
- Niveau (État vs administrations publiques) explicité pour éviter les confusions.
- Répartitions issues d'une API publique, snapshot reproductible (`npm run data`).
- Sources accessibles à l'utilisateur depuis le pied de page.

## Code

- Vanilla JS, **zéro dépendance runtime** hors librairies graphiques nécessaires.
- ES modules, fonctions courtes, une responsabilité par fichier.
- Aucun secret ni donnée personnelle dans le dépôt.

## Performance & robustesse

- Chargement des données non bloquant, état d'erreur explicite si l'API/JSON échoue.
- Animations en `transform`/`opacity` uniquement (60 fps).
- Fonctionne sans build ni installation (`npm start`).

## Design

- Sobre, clair par défaut, grandes cartes, très peu de texte.
- Couleurs sémantiques : bleu = recettes, rouge = déficit, orange = attention,
  vert = tendance (jamais un jugement de valeur), gris = historique.
