/* Le Relevé — version + changelog. Source unique du numéro de version affiché.
   Remplit le badge #app-version et ouvre une fenêtre de notes au clic.
   (Contenu embarqué → fonctionne aussi en file://, sans fetch.) */
(function () {
  "use strict";
  var VERSION = "0.8.7";
  window.ATLAS_VERSION = VERSION;
  // Chaque version : groupes { t: "Ajouté|Modifié|Corrigé|Retiré", items: [...] } (format Keep a Changelog).
  var CHANGELOG = [
    { v: "0.8.7", date: "2026-07-30", groups: [
      { t: "Ajouté", items: ["Entrées et Sorties : en drill-down, chaque ligne affiche aussi sa part du grand total (ex. « 56,6 % sur 693 Md » + « 23,4 % du total ») pour situer la ligne dans le niveau ET dans l'ensemble."] }
    ] },
    { v: "0.8.6", date: "2026-07-30", groups: [
      { t: "Corrigé", items: ["Entrées et Sorties : en drill-down, le pourcentage se calcule désormais sur le total du niveau affiché (les lignes somment à 100 %) et non plus sur le grand total. « sur X Md » suit le niveau."] }
    ] },
    { v: "0.8.5", date: "2026-07-30", groups: [
      { t: "Modifié", items: ["Sorties : libellés du switch plus clairs et parallèles — « Détail des dépenses publiques » et « Détail des dépenses de l'État » (au lieu de « À quoi sert l'argent » / « Détail du budget de l'État »)."] }
    ] },
    { v: "0.8.4", date: "2026-07-30", groups: [
      { t: "Ajouté", items: ["Entrées et Sorties : bouton « ‹ Retour » au-dessus de la liste (visible en drill-down) pour remonter d'un niveau sans aller chercher le fil d'Ariane en haut de page."] }
    ] },
    { v: "0.8.3", date: "2026-07-30", groups: [
      { t: "Modifié", items: ["Entrées et Sorties : chaque ligne indique sa part du grand total en pourcentage (ex. « 41,4 % sur 1 672 Md ») au lieu de « € sur 100 »."] }
    ] },
    { v: "0.8.1", date: "2026-07-29", groups: [
      { t: "Modifié", items: ["Notes de version affichées par sections (Ajouté / Modifié / Corrigé / Retiré), comme le fichier CHANGELOG."] }
    ] },
    { v: "0.8.0", date: "2026-07-29", groups: [
      { t: "Modifié", items: ["Un seul total pour l'argent public : ~1 672 Md€ partout (fin du « 1 600 vs 1 672 »). Entrées 1 520, écart 152."] },
      { t: "Retiré", items: ["« Par habitant » retiré partout (échelle, KPI, colonnes) : moyenne trompeuse. On garde « en euros » et « sur 100 € »."] }
    ] },
    { v: "0.7.1", date: "2026-07-29", groups: [
      { t: "Ajouté", items: ["Fil d'Ariane sur la page Dette ; carte « pièges de lecture » sur la différence de référentiel/année."] },
      { t: "Modifié", items: ["Identité visuelle propre à l'app (icône €) ; carte Sorties de l'accueil et accroches mises à jour."] },
      { t: "Retiré", items: ["Étiquettes de contexte redondantes (chips périmètre · année) sur Accueil, Entrées et Dette."] }
    ] },
    { v: "0.7.0", date: "2026-07-29", groups: [
      { t: "Ajouté", items: ["Sorties — vue « À quoi sert l'argent » : ~1 672 Md€ par fonction (retraites, hôpitaux, intérêts de la dette…), source Eurostat/COFOG 2024, en direct + cache + repli hors-ligne."] },
      { t: "Modifié", items: ["La vue « Détail du budget de l'État » (486 Md€, 2026, 688 lignes) devient la seconde vue de Sorties."] }
    ] },
    { v: "0.6.0", date: "2026-07-29", groups: [
      { t: "Modifié", items: ["Un seul point de vue : « tout l'argent public ». Fin de la bascule État/APU sur Entrées ; TVA en un seul chiffre. Titres « Le relevé des… »."] }
    ] },
    { v: "0.5.2", date: "2026-07-29", groups: [
      { t: "Retiré", items: ["Page Solde : contenu redondant avec l'accueil (relevé de l'année) et la page Dette."] }
    ] },
    { v: "0.5.1", date: "2026-07-29", groups: [
      { t: "Modifié", items: [
        "Nouveau fil d'Ariane : pleine largeur en haut de page, icône maison, séparateurs, niveau courant en gras.",
        "Sigles traduits en clair (PSRCT, PSRUE…) ; les URL restent sur l'identifiant brut."
      ] }
    ] },
    { v: "0.5.0", date: "2026-07-29", groups: [
      { t: "Ajouté", items: ["URL bookmarkable : chaque niveau de détail a son adresse ; Précédent / Suivant du navigateur fonctionnent ; lien profond restauré au chargement."] },
      { t: "Modifié", items: ["Adresses par identifiants stables (nom de la ligne) plutôt que par position.", "Page Sorties renommée (sorties.html) ; depenses.html redirige."] },
      { t: "Corrigé", items: ["Contrastes AA : texte secondaire renforcé en thème clair et sombre."] }
    ] },
    { v: "0.4.0", date: "2026-07-29", groups: [
      { t: "Ajouté", items: [
        "Écran Solde : entrées − sorties, financement de l'écart, et les deux lectures du déficit.",
        "Sorties : badge de provenance (appel direct / cache / instantané) + bouton Rafraîchir + délai d'attente.",
        "Badge de version cliquable (ces notes)."
      ] },
      { t: "Corrigé", items: ["Accessibilité : noms accessibles des lignes et segments, table de données sous le graphe Dette, focus déplacé au drill-down."] }
    ] },
    { v: "0.3.0", date: "2026-07-29", groups: [
      { t: "Ajouté", items: [
        "Portage du nouveau design dans les 4 pages (thème clair/sombre, Instrument Sans, palette des maquettes).",
        "Rendu piloté par les données ; Sorties en fetch live de l'API Bercy + cache, repli sur instantané embarqué."
      ] },
      { t: "Modifié", items: ["Cache-busting des assets (?v=)."] }
    ] }
  ];
  window.ATLAS_CHANGELOG = CHANGELOG;

  function fmtDate(d) { try { return new Date(d).toLocaleDateString("fr-FR"); } catch (e) { return d; } }

  var lastFocus = null;
  function openModal() {
    lastFocus = document.activeElement;
    var ov = document.createElement("div");
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-modal", "true");
    ov.setAttribute("aria-label", "Notes de version");
    ov.style.cssText = "position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.45);display:flex;align-items:flex-start;justify-content:center;padding:8vh 16px 16px;overflow:auto";
    var card = document.createElement("div");
    card.style.cssText = "background:var(--surface);color:var(--ink);border:1px solid var(--border);border-radius:20px;max-width:560px;width:100%;padding:28px 30px;box-shadow:0 20px 60px rgba(0,0,0,.3)";
    var html = '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:16px">' +
      '<h2 style="margin:0;font-size:20px;font-weight:700;letter-spacing:-.02em">Notes de version</h2>' +
      '<button id="version-close" type="button" aria-label="Fermer" style="border:1px solid var(--border);background:transparent;color:var(--soft);border-radius:999px;width:30px;height:30px;cursor:pointer;font-size:15px">✕</button></div>';
    var TONE = { "Ajouté": "var(--green)", "Modifié": "var(--blue)", "Corrigé": "var(--orange)", "Retiré": "var(--red)" };
    html += CHANGELOG.map(function (e) {
      var groups = e.groups || (e.notes ? [{ t: "", items: e.notes }] : []);
      var body = groups.map(function (g) {
        var head = g.t ? '<div style="margin:12px 0 4px;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:' + (TONE[g.t] || "var(--mute)") + '">' + g.t + '</div>' : "";
        return head + '<ul style="margin:6px 0 0;padding-left:18px;display:flex;flex-direction:column;gap:6px">' +
          g.items.map(function (n) { return '<li style="font-size:14px;line-height:1.5;color:var(--soft)">' + n + '</li>'; }).join("") + '</ul>';
      }).join("");
      return '<div style="margin-top:22px"><div style="display:flex;align-items:baseline;gap:10px">' +
        '<span style="font-size:15px;font-weight:700">v' + e.v + '</span>' +
        '<span style="font-size:12px;color:var(--mute)">' + fmtDate(e.date) + '</span></div>' + body + '</div>';
    }).join("");
    card.innerHTML = html;
    ov.appendChild(card);
    document.body.appendChild(ov);
    function close() {
      if (ov.parentNode) ov.parentNode.removeChild(ov);
      document.removeEventListener("keydown", onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function onKey(e) { if (e.key === "Escape") close(); }
    document.getElementById("version-close").addEventListener("click", close);
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    document.addEventListener("keydown", onKey);
    document.getElementById("version-close").focus();
  }

  function init() {
    var b = document.getElementById("app-version");
    if (!b) return;
    b.textContent = "v" + VERSION;
    b.addEventListener("click", openModal);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
