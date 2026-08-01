/* Le Relevé — Entrées (drill-down). Piloté par window.ATLAS.revenues — aucun chiffre en dur. */
(function () {
  "use strict";
  var data = window.ATLAS || window.RELEVE;
  if (!data || !data.revenues || !data.revenues.scopes) return;

  var SC = data.revenues.scopes;
  var POP = (data.revenues.meta && data.revenues.meta.population) || 68600000;
  var HUES = [155, 210, 255, 45, 22, 290, 172, 92, 330, 268, 120, 195];
  var ROOT_LEVEL = "Niveau 1 · Sources";
  var ITEM_LEVEL = ["Source", "Détail", "Détail"];

  // Un seul périmètre : tout l'argent public (plus de bascule État/APU).
  var SCOPE = "apu";
  var state = { path: [], q: "" };

  // ---- Routage par URL (identifiants stables = slugs de libellés) ----
  var routingReady = false, selfWrite = false;
  function slug(s) {
    return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
  }
  function rootListFor(id) { return (SC[id] && SC[id].tree) || []; }
  function buildHash() {
    var segs = [];
    pathNodes().forEach(function (n) { segs.push(slug(n.label)); });
    var h = "/" + segs.join("/");
    if (state.q.trim()) h += "?f=" + encodeURIComponent(state.q.trim());
    return h;
  }
  function resolvePath(slugs) {
    var list = rootListFor(SCOPE), path = [];
    for (var s = 0; s < slugs.length; s++) {
      var idx = -1;
      for (var i = 0; i < list.length; i++) { if (slug(list[i].label) === slugs[s]) { idx = i; break; } }
      if (idx < 0) break;
      path.push(idx); list = list[idx].children || [];
    }
    return path;
  }
  function writeHash(push) {
    if (!routingReady) return;
    var h = buildHash();
    if (("#" + h) === location.hash) return;
    if (push) { selfWrite = true; location.hash = h; }
    else { try { history.replaceState(null, "", location.pathname + location.search + "#" + h); } catch (e) { selfWrite = true; location.hash = h; } }
  }
  function applyHash() {
    var raw = location.hash.replace(/^#\/?/, "");
    var parts = raw.split("?");
    var segs = parts[0] ? parts[0].split("/").filter(Boolean) : [];
    var q = "";
    try { q = new URLSearchParams(parts[1] || "").get("f") || ""; } catch (e) {}
    state.path = resolvePath(segs);
    state.q = q;
    render();
  }

  function nf(v, d) { return Number(v).toLocaleString("fr-FR", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function mdOf(eur) { return eur / 1e9; }
  function scope() { return SC[SCOPE]; }
  function color(i, depth) { return "oklch(" + (0.62 + Math.min(depth, 3) * 0.08).toFixed(2) + " 0.135 " + HUES[i % HUES.length] + ")"; }
  function levelName(d) {
    if (!d) return ROOT_LEVEL;
    var i = Math.min(d - 1, ITEM_LEVEL.length - 1);
    return "Niveau " + (i + 1) + " · " + ITEM_LEVEL[i];
  }
  function levelList() {
    var list = scope().tree;
    for (var k = 0; k < state.path.length; k++) {
      var n = list[state.path[k]];
      if (!n) return [];
      list = n.children || [];
    }
    return list.slice().sort(function (a, b) { return b.amount - a.amount; });
  }
  function pathNodes() {
    var list = scope().tree, out = [];
    for (var k = 0; k < state.path.length; k++) {
      var n = list[state.path[k]];
      if (!n) break;
      out.push(n);
      list = n.children || [];
    }
    return out;
  }
  function currentLevelList() {
    var list = scope().tree;
    for (var k = 0; k < state.path.length; k++) list = (list[state.path[k]] && list[state.path[k]].children) || [];
    return list;
  }
  function drill(node) {
    if (!node.children || !node.children.length) return;
    var i = currentLevelList().indexOf(node);
    if (i < 0) return;
    state.path = state.path.concat([i]); state.q = ""; writeHash(true); render(); focusHeading();
  }
  function goTo(d) { state.path = state.path.slice(0, d); state.q = ""; writeHash(true); render(); focusHeading(); }

  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function focusHeading() { var h = $("band-title"); if (h) { h.setAttribute("tabindex", "-1"); h.focus(); } }

  function render() {
    var sc = scope();
    var list = levelList();
    var rawList = currentLevelList();
    var nodes = pathNodes();
    var depth = nodes.length;
    var total = list.reduce(function (s, n) { return s + n.amount; }, 0) || 1;
    var grand = sc.tree.reduce(function (s, n) { return s + n.amount; }, 0);
    var rootHue = depth ? state.path[0] : null;
    var q = state.q.trim().toLowerCase();
    var shown = q ? list.filter(function (n) { return n.label.toLowerCase().indexOf(q) >= 0; }) : list;
    var max = shown.length ? Math.max.apply(null, shown.map(function (n) { return n.amount; })) : 1;

    // Intro (un seul périmètre : tout l'argent public)
    $("lead").innerHTML = "La France reçoit <b style=\"color:var(--ink)\">" + nf(mdOf(grand), 0) +
      " milliards d'euros</b> par an. Voici d'où ils viennent, de la plus grosse source à la plus petite. " +
      "<span style=\"color:var(--mute)\">(Prévisions du budget 2026 ; répartition en ordres de grandeur.)</span>";

    // KPIs
    var topShareTotal = (sc.tree.slice().sort(function (a, b) { return b.amount - a.amount; })[0].amount / grand) * 100;
    function kpiLight(label, value, unit) {
      return '<div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:22px 24px">' +
        '<div style="font-size:13px;font-weight:600;color:var(--mute);letter-spacing:.02em;text-transform:uppercase">' + label + '</div>' +
        '<div class="tnum" style="margin-top:10px;font-size:34px;font-weight:700;letter-spacing:-.03em">' + value +
        ' <span style="font-size:17px;font-weight:600;color:var(--soft)">' + unit + '</span></div></div>';
    }
    $("kpis").innerHTML =
      kpiLight("Total reçu", nf(mdOf(grand), 0), "Md€") +
      '<div style="background:var(--inv-surface);color:var(--inv-ink);border-radius:18px;padding:22px 24px">' +
        '<div style="font-size:13px;font-weight:600;color:var(--inv-mute);letter-spacing:.02em;text-transform:uppercase">La première source pèse</div>' +
        '<div class="tnum" style="margin-top:10px;font-size:34px;font-weight:700;letter-spacing:-.03em;color:var(--inv-ink)">' + nf(topShareTotal, 0) +
        ' <span style="font-size:17px;font-weight:600;color:var(--inv-mute)">% du total</span></div></div>';

    // 100 € band
    $("band-title").textContent = "D'où viennent 100 € d'entrées" + (depth ? " en « " + nodes[depth - 1].label + " »" : "");
    $("band").innerHTML = list.slice(0, 12).map(function (n, i) {
      var ri = rawList.indexOf(n);
      var hueIdx = rootHue === null ? i : rootHue;
      var short = (n.amount / total > 0.08) ? n.label.split(/[\s(]/)[0].replace(/[,:]/, "").slice(0, 18) : "";
      var title = n.label + " — " + nf((n.amount / total) * 100, 1) + " €";
      return '<button type="button" data-ri="' + ri + '" aria-label="' + esc(title) + '" title="' + esc(title) + '" style="border:0;padding:0;cursor:pointer;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;transition:filter .15s;flex:' +
        mdOf(n.amount) + ';background:' + color(hueIdx, depth) + '"><span aria-hidden="true" style="font-size:12px;font-weight:700;color:#fff;padding:0 8px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden">' + esc(short) + '</span></button>';
    }).join("");
    var WORDS = ["", "La première source", "Les deux premières sources", "Les trois premières sources"];
    var k = Math.min(3, list.length);
    var top = list.slice(0, k);
    var topShare = (top.reduce(function (s, n) { return s + n.amount; }, 0) / total) * 100;
    $("band-sentence").textContent = list.length > 1 && topShare < 99.5
      ? WORDS[k] + " — " + top.map(function (n) { return n.label; }).join(", ") + " — " + (k === 1 ? "apporte " : "apportent ") + nf(topShare, 0) + " € sur 100 €."
      : (list.length === 1 ? "Ce niveau ne compte qu'une ligne : " + list[0].label + "." : "");

    // Breadcrumb (pleine largeur, icône maison, séparateurs ›)
    var ROOT_CRUMB = "Toutes les sources";
    var sep = '<span aria-hidden="true" style="color:var(--faint)">›</span>';
    var HOME_SVG = '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false" style="display:block"><path d="M8 1.6 1.8 6.7V14a.6.6 0 0 0 .6.6h3.4V10h4.4v4.6h3.4a.6.6 0 0 0 .6-.6V6.7L8 1.6Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>';
    var crumbLink = function (label, attrs, title) {
      return '<button type="button" ' + attrs + ' title="' + esc(title) + '" style="border:0;background:transparent;padding:0;cursor:pointer;color:var(--soft);font-size:14px;font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:280px">' + esc(label) + '</button>';
    };
    var bc = '<a href="index.html" title="Accueil — Le Relevé" style="display:flex;align-items:center;gap:6px;color:var(--soft);text-decoration:none;font-weight:600;letter-spacing:-.01em">' + HOME_SVG + '<span>Le Relevé</span></a>' + sep;
    if (depth) {
      bc += crumbLink(ROOT_CRUMB, 'data-goto="0"', levelName(0)) + sep;
      for (var d = 0; d < depth - 1; d++) bc += crumbLink(nodes[d].label, 'data-goto="' + (d + 1) + '"', levelName(d + 1)) + sep;
    }
    bc += '<span aria-current="page" title="' + esc(levelName(depth)) + '" style="font-weight:700;color:var(--ink);letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:420px">' + esc(depth ? nodes[depth - 1].label : ROOT_CRUMB) + '</span>';
    $("breadcrumb").innerHTML = bc;

    // Bouton retour contextuel (remonte d'un niveau) — visible seulement en drill-down
    var backParent = depth > 1 ? nodes[depth - 2].label : "Toutes les sources";
    $("backbar").innerHTML = depth
      ? '<button type="button" data-goto="' + (depth - 1) + '" aria-label="Retour vers ' + esc(backParent) + '" title="Retour vers ' + esc(backParent) + '" style="margin-top:22px;display:inline-flex;align-items:center;gap:7px;border:1px solid var(--border);background:var(--surface);color:var(--soft);border-radius:999px;padding:9px 16px;font-size:14px;font-weight:600;letter-spacing:-.01em;cursor:pointer"><span aria-hidden="true" style="font-size:16px;line-height:1">‹</span> Retour · ' + esc(backParent) + '</button>'
      : "";

    // Count + rows
    $("count").textContent = shown.length ? shown.length + (shown.length > 1 ? " lignes" : " ligne") + " · total " + nf(mdOf(total), 1) + " Md€" : "";
    $("rows").innerHTML = shown.map(function (n, i) {
      var ri = rawList.indexOf(n);
      var hueIdx = rootHue === null ? list.indexOf(n) : rootHue;
      var kids = (n.children || []).length;
      var sub = n.note || (kids ? kids + (kids > 1 ? " sous-postes" : " sous-poste") : "");
      var w = Math.max(1.5, (n.amount / max) * 100);
      return '<button type="button" data-ri="' + ri + '" data-kids="' + kids + '" style="text-align:left;width:100%;border:1px solid var(--border);background:var(--surface);border-radius:16px;padding:16px 20px;cursor:' + (kids ? "pointer" : "default") + ';display:grid;grid-template-columns:32px minmax(160px,1.35fr) 2fr auto 18px;align-items:center;gap:18px">' +
        '<span class="tnum" style="font-size:13px;font-weight:600;color:var(--faint)">' + (i + 1) + '</span>' +
        '<span style="display:block;min-width:0"><span style="display:block;font-size:15px;font-weight:600;letter-spacing:-.01em;line-height:1.35;text-wrap:pretty">' + esc(n.label) + '</span>' +
        '<span style="display:block;font-size:12px;color:var(--mute);line-height:1.4;margin-top:3px;text-wrap:pretty">' + esc(sub) + '</span></span>' +
        '<span style="display:flex;align-items:center;gap:12px"><span style="flex:1;height:12px;border-radius:999px;background:var(--track);overflow:hidden;display:block">' +
        '<span style="display:block;height:100%;border-radius:999px;transition:width .5s cubic-bezier(.22,1,.36,1);width:' + w.toFixed(1) + '%;background:' + color(hueIdx, depth) + '"></span></span>' +
        '<span class="tnum" style="font-size:15px;font-weight:700;white-space:nowrap;min-width:82px;text-align:right">' + nf(mdOf(n.amount), mdOf(n.amount) >= 100 ? 0 : 1) + ' Md€</span></span>' +
        '<span style="text-align:right;line-height:1.3;min-width:104px"><span class="tnum" style="display:block;font-size:15px;font-weight:700;color:var(--green)">' + nf((n.amount / total) * 100, 1) + ' %</span><span class="tnum" style="display:block;font-size:11px;color:var(--mute)">sur ' + nf(mdOf(total), 0) + ' Md</span>' + (depth ? '<span class="tnum" style="display:block;font-size:11px;color:var(--faint);margin-top:2px">' + nf((n.amount / grand) * 100, 1) + ' % du total</span>' : '') + '</span>' +
        '<span style="color:var(--faint);font-size:15px;text-align:right">' + (kids ? "→" : "") + '</span></button>';
    }).join("");
    $("empty").hidden = shown.length !== 0;

    // Solde recap
    var gap = sc.sorties - grand;
    var scale = Math.max(grand, sc.sorties);
    $("solde-sentence").textContent = "Il entre " + nf(mdOf(grand), 0) + " Md€ et il sort " + nf(mdOf(sc.sorties), 0) +
      " Md€ : il manque " + nf(mdOf(gap), 0) + " Md€. Cette somme est empruntée et vient s'ajouter à la dette.";
    $("v-in").textContent = nf(mdOf(grand), 0) + " Md€";
    $("v-out").textContent = nf(mdOf(sc.sorties), 0) + " Md€";
    $("v-gap").textContent = "− " + nf(mdOf(gap), 0) + " Md€";
    $("s-in").style.width = (grand / scale) * 100 + "%";
    $("s-out").style.width = (sc.sorties / scale) * 100 + "%";
    $("s-gap").style.width = (gap / scale) * 100 + "%";

    // keep search box value in sync without stealing the caret while typing
    var qi = $("query");
    if (qi && document.activeElement !== qi && qi.value !== state.q) qi.value = state.q;
  }

  // Event delegation
  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-goto],[data-ri]") : null;
    if (!t) return;
    if (t.hasAttribute("data-goto")) return goTo(parseInt(t.getAttribute("data-goto"), 10));
    if (t.hasAttribute("data-ri")) {
      var node = currentLevelList()[parseInt(t.getAttribute("data-ri"), 10)];
      if (node) drill(node);
    }
  });
  var qbox = $("query");
  if (qbox) qbox.addEventListener("input", function () { state.q = qbox.value; writeHash(false); render(); });

  window.addEventListener("hashchange", function () {
    if (selfWrite) { selfWrite = false; return; }
    applyHash();
  });

  routingReady = true;
  if (location.hash.length > 2) { applyHash(); }
  else { render(); writeHash(false); }
})();
