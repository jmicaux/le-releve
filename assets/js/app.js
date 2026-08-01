/* Le Relevé — Accueil (relevé de l'année).
   Rendu piloté par window.ATLAS (voir assets/js/data.js) — aucun chiffre en dur.
   Script classique (pas de module) → fonctionne en file://. */
(function () {
  "use strict";

  var data = window.ATLAS || window.RELEVE;
  if (!data || !data.budget || !data.budget.releve) {
    var s = document.getElementById("sentence");
    if (s) s.textContent =
      "Données introuvables : assets/js/data.js est manquant ou périmé (npm run build).";
    return;
  }

  var budget = data.budget;
  var r = budget.releve;
  var pop = (budget.meta && budget.meta.population) || 68600000;

  // Montants en milliards. L'écart est dérivé des deux barres (sorties − entrées).
  var IN = r.entrees / 1e9;
  var OUT = r.sorties / 1e9;
  var GAP = OUT - IN;
  var DETTE = (r.dette || 0) / 1e9;
  var MAX = Math.max(IN, OUT);

  var nf0 = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 });
  function eur(md) { return nf0.format(Math.round((md * 1e9) / pop)) + " €"; }
  function mds(md) { return nf0.format(Math.round(md)) + " Md€"; }
  function cent(md) { return nf0.format(Math.round((md / IN) * 100)) + " €"; }

  var state = "md";
  var SCALES = [
    { id: "md", label: "Milliards d'euros" },
    { id: "cent", label: "Sur 100 €" }
  ];

  function fmt(md) {
    if (state === "md") return mds(md);
    return cent(md);
  }

  function sentence() {
    if (state === "md") {
      return "Il entre " + mds(IN) + " et il sort " + mds(OUT) +
        ". L'écart de " + mds(GAP) +
        " est emprunté, et vient s'ajouter à une dette de " + mds(DETTE) + ".";
    }
    return "Pour 100 € encaissés, il en est dépensé " +
      nf0.format(Math.round((OUT / IN) * 100)) + ". Les " +
      nf0.format(Math.round((GAP / IN) * 100)) +
      " € manquants sont empruntés — c'est ce qui alimente la dette d'une année sur l'autre.";
  }

  var el = {
    scales: document.getElementById("scales"),
    valIn: document.getElementById("val-in"),
    valOut: document.getElementById("val-out"),
    valGap: document.getElementById("val-gap"),
    barIn: document.getElementById("bar-in"),
    barOut: document.getElementById("bar-out"),
    barGap: document.getElementById("bar-gap"),
    sentence: document.getElementById("sentence")
  };

  function render() {
    el.valIn.textContent = fmt(IN);
    el.valOut.textContent = fmt(OUT);
    el.valGap.textContent = "− " + fmt(GAP);
    el.barIn.style.width = (IN / MAX) * 100 + "%";
    el.barOut.style.width = (OUT / MAX) * 100 + "%";
    el.barGap.style.width = (GAP / MAX) * 100 + "%";
    el.sentence.textContent = sentence();
    Array.prototype.forEach.call(el.scales.children, function (btn) {
      var on = btn.getAttribute("data-id") === state;
      btn.style.background = on ? "var(--ink)" : "transparent";
      btn.style.color = on ? "var(--bg)" : "var(--soft)";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  SCALES.forEach(function (sc) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-id", sc.id);
    btn.setAttribute("aria-pressed", "false");
    btn.textContent = sc.label;
    btn.style.cssText =
      "border:0;cursor:pointer;padding:7px 15px;border-radius:999px;font-size:13.5px;" +
      "font-weight:600;letter-spacing:-.01em;background:transparent;color:var(--soft)";
    btn.addEventListener("click", function () { state = sc.id; render(); });
    el.scales.appendChild(btn);
  });

  render();
})();
