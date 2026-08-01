/* Le Relevé — Dette. Rendu piloté par window.ATLAS.debt — aucun chiffre en dur. */
(function () {
  "use strict";
  var data = window.ATLAS || window.RELEVE;
  if (!data || !data.debt) return;
  var debt = data.debt;
  var stock = debt.stock || {};
  var series = debt.series || [];

  function nf(v, d) {
    return Number(v).toLocaleString("fr-FR", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
  }
  function md(eur) { return nf(Math.round(eur / 1e9)) + " Md€"; }
  function set(id, html) { var e = document.getElementById(id); if (e) e.innerHTML = html; }

  /* ------- En-tête + KPIs ------- */
  set("lead",
    "Chaque année, la différence entre entrées et sorties est empruntée. Tous ces emprunts " +
    "cumulés forment la dette : <b style=\"color:var(--ink)\">" + nf(Math.round(stock.amount / 1e9)) +
    " milliards d'euros</b> fin 2026.");

  function kpi(label, value, unit) {
    return '<div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:22px 24px">' +
      '<div style="font-size:13px;font-weight:600;color:var(--mute);letter-spacing:.02em;text-transform:uppercase">' + label + '</div>' +
      '<div class="tnum" style="margin-top:10px;font-size:29px;font-weight:700;letter-spacing:-.03em">' + value +
      ' <span style="font-size:15px;font-weight:600;color:var(--soft)">' + unit + '</span></div></div>';
  }
  set("kpis",
    kpi("Montant", nf(Math.round(stock.amount / 1e9)), "Md€") +
    kpi("Comparée à ce que le pays produit", nf(stock.pctPib), "%") +
    kpi("Intérêts payés en 2026", nf(Math.round(stock.interets2026 / 1e9)), "Md€"));

  /* ------- Graphique (unité au choix) ------- */
  var UNITS = [
    { id: "pib", label: "% de la production", val: function (r) { return r.pctPib; }, suffix: " %", dec: 0,
      title: "La dette comparée à ce que le pays produit en un an",
      hint: "La dette rapportée à tout ce que le pays produit en un an — c'est-à-dire à ce qu'il gagne.",
      caveat: "Ce pourcentage monte aussi quand la production recule, sans emprunt nouveau. C'est l'essentiel du saut de 2020." },
    { id: "md", label: "Milliards d'euros", val: function (r) { return r.amount / 1e9; }, suffix: " Md€", dec: 0,
      title: "La dette en euros",
      hint: "Le montant emprunté et pas encore remboursé.",
      caveat: "Ces montants ignorent la hausse des prix : 100 Md€ de 1990 valent plus que 100 Md€ de 2026. Pour comparer deux époques, préférez le pourcentage." }
  ];
  var unitId = "pib";
  function unit() { return UNITS.filter(function (u) { return u.id === unitId; })[0]; }

  function isDark() {
    return window.atlasTheme ? window.atlasTheme.effective() === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function palette() {
    return isDark()
      ? { line: "#9aa3b7", area: "#9aa3b7", grid: "#21252f", gtext: "#565d6b", ttext: "#7c8494", mstroke: "#9aa3b7", mfill: "#191c22", mtext: "#f2f4f8" }
      : { line: "#3c4356", area: "#5b6172", grid: "#eceef2", gtext: "#b3b7c2", ttext: "#8b90a0", mstroke: "#3c4356", mfill: "#ffffff", mtext: "#0d1220" };
  }

  var minY = series.length ? series[0].year : 1980;
  var maxY = series.length ? series[series.length - 1].year : 2026;
  var MARK_YEARS = [minY, 2008, 2020, maxY];
  var TICK_YEARS = [1980, 1990, 2000, 2010, 2020, maxY].filter(function (y) { return y >= minY && y <= maxY; });

  function chartSVG() {
    var u = unit(), p = palette();
    var pts = series.map(function (r) { return { year: r.year, v: u.val(r) }; });
    var x0 = 60, x1 = 992, yTop = 26, yBot = 318;
    var maxV = Math.max.apply(null, pts.map(function (o) { return o.v; })) * 1.06;
    function X(y) { return x0 + ((y - minY) / (maxY - minY)) * (x1 - x0); }
    function Y(v) { return yBot - (v / maxV) * (yBot - yTop); }
    var coords = pts.map(function (o) { return { year: o.year, v: o.v, x: X(o.year), y: Y(o.v) }; });
    var line = coords.map(function (c, i) { return (i ? "L" : "M") + c.x.toFixed(1) + " " + c.y.toFixed(1); }).join(" ");
    var area = line + " L" + x1.toFixed(1) + " " + yBot + " L" + x0.toFixed(1) + " " + yBot + " Z";

    var grid = "";
    for (var i = 0; i <= 5; i++) {
      var v = (maxV / 5) * i, y = Y(v);
      grid += '<line x1="52" x2="1000" y1="' + y.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="' + p.grid + '" stroke-width="1"></line>' +
        '<text x="0" y="' + (y - 5).toFixed(1) + '" fill="' + p.gtext + '" font-size="12" font-weight="600">' + nf(Math.round(v / 10) * 10) + '</text>';
    }
    var ticks = TICK_YEARS.map(function (y) {
      return '<text x="' + X(y).toFixed(1) + '" y="366" fill="' + p.ttext + '" font-size="12" font-weight="600" text-anchor="middle">' + y + '</text>';
    }).join("");
    var marks = coords.filter(function (c) { return MARK_YEARS.indexOf(c.year) >= 0; }).map(function (c) {
      var first = c.year === minY, last = c.year === maxY;
      var tx = (c.x + (first ? 8 : last ? -8 : 0)).toFixed(1);
      var anchor = first ? "start" : last ? "end" : "middle";
      return '<circle cx="' + c.x.toFixed(1) + '" cy="' + c.y.toFixed(1) + '" r="4.5" fill="' + p.mfill + '" stroke="' + p.mstroke + '" stroke-width="2.5"></circle>' +
        '<text x="' + tx + '" y="' + (c.y - 14).toFixed(1) + '" fill="' + p.mtext + '" font-size="12.5" font-weight="700" text-anchor="' + anchor + '">' + nf(c.v, u.dec) + u.suffix + '</text>';
    }).join("");

    return '<svg viewBox="0 0 1000 372" preserveAspectRatio="none" style="width:100%;height:352px;display:block;font-family:Instrument Sans,sans-serif">' +
      '<defs><linearGradient id="dgrad" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="' + p.area + '" stop-opacity="0.20"></stop>' +
      '<stop offset="100%" stop-color="' + p.area + '" stop-opacity="0.02"></stop></linearGradient></defs>' +
      grid +
      '<path d="' + area + '" fill="url(#dgrad)"></path>' +
      '<path d="' + line + '" fill="none" stroke="' + p.line + '" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></path>' +
      marks + ticks + '</svg>';
  }

  function renderTable() {
    var u = unit();
    var rows = series.map(function (r) {
      return "<tr><th scope=\"row\" style=\"text-align:left;font-weight:600;padding:4px 12px 4px 0;border-bottom:1px solid var(--hair)\">" + r.year +
        "</th><td class=\"tnum\" style=\"text-align:right;padding:4px 0;border-bottom:1px solid var(--hair)\">" + nf(u.val(r), u.dec) + u.suffix + "</td></tr>";
    }).join("");
    set("chart-table", '<table style="border-collapse:collapse;font-size:13px;color:var(--soft);min-width:220px">' +
      '<caption style="text-align:left;font-size:12px;color:var(--mute);margin-bottom:6px">' + u.title + '</caption>' +
      '<thead><tr><th scope="col" style="text-align:left;padding:0 12px 6px 0">Année</th><th scope="col" style="text-align:right;padding:0 0 6px">' + u.label + '</th></tr></thead><tbody>' + rows + '</tbody></table>');
  }

  function renderChart() {
    var u = unit();
    set("chart-title", u.title);
    set("chart-hint", u.hint);
    set("chart-caveat", u.caveat);
    set("chart", chartSVG());
    renderTable();
    var box = document.getElementById("units");
    Array.prototype.forEach.call(box.children, function (btn) {
      var on = btn.getAttribute("data-id") === unitId;
      btn.style.background = on ? "var(--ink)" : "transparent";
      btn.style.color = on ? "var(--bg)" : "var(--soft)";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  var unitsBox = document.getElementById("units");
  UNITS.forEach(function (u) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-id", u.id);
    btn.textContent = u.label;
    btn.style.cssText = "border:0;cursor:pointer;padding:8px 16px;border-radius:999px;font-size:14px;font-weight:600;letter-spacing:-.01em;background:transparent;color:var(--soft)";
    btn.addEventListener("click", function () { unitId = u.id; renderChart(); });
    unitsBox.appendChild(btn);
  });
  renderChart();
  window.addEventListener("themechange", renderChart);

  /* ------- Périodes de hausse ------- */
  set("spikes", (debt.spikes || []).map(function (s) {
    return '<div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:20px 22px">' +
      '<div class="tnum" style="font-size:13px;font-weight:700;color:var(--mute);letter-spacing:.02em">' + s.year + '</div>' +
      '<div style="margin-top:8px;font-size:16px;font-weight:700;letter-spacing:-.015em">' + s.title + '</div>' +
      '<p style="margin:8px 0 0;font-size:14px;line-height:1.55;color:var(--soft);text-wrap:pretty">' + s.text + '</p>' +
      '<div class="tnum" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--hair);font-size:13px;font-weight:600;color:var(--soft)">' + s.delta + '</div></div>';
  }).join(""));

  /* ------- Intérêts ------- */
  set("interets-lead",
    "Comme pour un crédit, l'État paie des intérêts sans rembourser la somme empruntée : " +
    md(stock.interets2026) + " en 2026. À comparer aux autres dépenses.");
  var cmp = debt.interetsCompare || [];
  var cmpMax = cmp.length ? Math.max.apply(null, cmp.map(function (b) { return b.value; })) : 1;
  set("interets", cmp.map(function (b, i) {
    var w = (b.value / cmpMax) * 100;
    return '<div style="display:flex;align-items:center;gap:14px">' +
      '<span style="width:210px;font-size:14px;color:var(--soft);flex-shrink:0;line-height:1.35">' + b.label + '</span>' +
      '<span style="flex:1;min-width:0;display:block"><span style="display:block;height:28px;border-radius:8px;width:' + w.toFixed(1) + '%;background:' + (i === 0 ? "var(--slate)" : "var(--bar-mute)") + '"></span></span>' +
      '<span class="tnum" style="width:86px;text-align:right;font-size:14px;font-weight:700;flex-shrink:0">' + md(b.value) + '</span></div>';
  }).join(""));

  /* ------- Débats ------- */
  set("debates", (debt.debates || []).map(function (d) {
    return '<div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:24px 26px">' +
      '<div style="font-size:12.5px;font-weight:700;color:var(--mute);letter-spacing:.04em;text-transform:uppercase">' + d.tag + '</div>' +
      '<div style="margin-top:10px;font-size:17px;font-weight:700;letter-spacing:-.015em;line-height:1.3;text-wrap:pretty">' + d.title + '</div>' +
      '<ul style="margin:12px 0 0;padding-left:18px;display:flex;flex-direction:column;gap:8px">' +
      d.points.map(function (p) { return '<li style="font-size:14.5px;line-height:1.55;color:var(--soft);text-wrap:pretty">' + p + '</li>'; }).join("") +
      '</ul></div>';
  }).join(""));

  /* ------- FAQ ------- */
  set("faq", (debt.faq || []).map(function (f) {
    return '<div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:22px 24px">' +
      '<div style="font-size:16px;font-weight:700;letter-spacing:-.015em;text-wrap:pretty">' + f.q + '</div>' +
      '<p style="margin:10px 0 0;font-size:14.5px;line-height:1.6;color:var(--soft);text-wrap:pretty">' + f.a + '</p></div>';
  }).join(""));
})();
