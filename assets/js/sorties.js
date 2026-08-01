/* Le Relevé — Sorties. Deux vues :
   - "Détail des dépenses publiques" : toutes les administrations par fonction (COFOG/Eurostat, ~1 672 Md€, 2024).
   - "Détail des dépenses de l'État" : les 486 Md€ (Bercy 2026), 3 modes, 688 lignes.
   Données via ATLASDATA (live + cache, repli snapshot). Aucun chiffre en dur. */
(function () {
  "use strict";
  var POP = 68600000;
  var HUES = [255, 210, 172, 145, 92, 45, 22, 330, 290, 268, 195, 120, 60];
  var NEG = "oklch(0.72 0.02 260)";
  var HOME_SVG = '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false" style="display:block"><path d="M8 1.6 1.8 6.7V14a.6.6 0 0 0 .6.6h3.4V10h4.4v4.6h3.4a.6.6 0 0 0 .6-.6V6.7L8 1.6Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>';

  var DATA = { cofog: null, etat: null };

  var WORLDS = [
    { id: "cofog", label: "Détail des dépenses publiques" },
    { id: "etat", label: "Détail des dépenses de l'État" }
  ];
  var COFOG_CFG = { crumb: "Grandes fonctions", rootLevel: "Niveau 1 · Fonctions",
    item: ["Fonction", "Sous-fonction", "Détail"],
    hint: "Les grandes fonctions de la dépense publique, de la plus grosse à la plus petite." };
  var ETAT_MODES = [
    { id: "postes", label: "Par thème", hint: "34 thèmes, du plus gros au plus petit.", root: "tree", crumb: "Grands thèmes",
      rootLevel: "Niveau 1 · Grands thèmes", item: ["Thème", "Sous-thème", "Détail", "Détail"] },
    { id: "missions", label: "Par chapitre officiel", hint: "Le classement de l'État : 41 grands chapitres, 148 chapitres, 688 lignes.", root: "missionsTree", crumb: "Grands chapitres",
      rootLevel: "Niveau 1 · Grands chapitres", item: ["Grand chapitre", "Chapitre", "Ligne", "Détail"] },
    { id: "actions", label: "Par ligne", hint: "Les 688 lignes de dépense, de la plus grosse à la plus petite. Utilisez le filtre.", root: null, crumb: "Toutes les lignes",
      rootLevel: "Toutes les lignes", item: ["Ligne"] }
  ];
  var MODE_SLUG = { postes: "themes", missions: "chapitres", actions: "lignes" };
  var SLUG_MODE = { themes: "postes", chapitres: "missions", lignes: "actions" };

  var state = { world: "cofog", mode: "postes", path: [], q: "", limit: 60 };
  var flatCache = null;

  function nf(v, d) { return Number(v).toLocaleString("fr-FR", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function color(i, depth) { return "oklch(" + (0.62 + Math.min(depth, 3) * 0.07).toFixed(2) + " 0.145 " + HUES[i % HUES.length] + ")"; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  var LABEL_MAP = {
    "PSRCT": "Reversements aux collectivités territoriales",
    "PSRUE": "Contribution à l'Union européenne",
    "PSR-CT": "Reversements aux collectivités territoriales",
    "PSR-UE": "Contribution à l'Union européenne",
    "PSR Collectivités territoriales": "Reversements aux collectivités territoriales",
    "PSR Union européeenne": "Contribution à l'Union européenne",
    "T2 - contribution au CAS": "Cotisations retraite des agents de l'État",
    "Opérations concernant la dette publique": "Intérêts de la dette",
    "Fonctionnement des organes exécutifs et législatifs, affaires financières et fiscales, affaires étrangères": "Gouvernement, finances publiques et affaires étrangères",
    "Services généraux des administrations publiques n.c.a.": "Autres services généraux"
  };
  function pretty(label) {
    if (LABEL_MAP[label]) return LABEL_MAP[label];
    // Nettoyage léger du jargon COFOG résiduel.
    return String(label).replace(/\s*n\.c\.a\./gi, " (autres)").replace(/^R & D concernant\s+(la |des |l['’])?/i, "Recherche : ");
  }
  function $(id) { return document.getElementById(id); }
  function focusHeading() { var h = $("band-title"); if (h) { h.setAttribute("tabindex", "-1"); h.focus(); } }

  function isCofog() { return state.world === "cofog"; }
  function etatMode() { return ETAT_MODES.filter(function (m) { return m.id === state.mode; })[0]; }
  function cfg() { return isCofog() ? COFOG_CFG : etatMode(); }
  function isFlat() { return !isCofog() && state.mode === "actions"; }
  function dataset() { return isCofog() ? DATA.cofog : DATA.etat; }
  function ready() { return !!dataset(); }

  function slug(s) {
    return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
  }

  function rootList() {
    if (isCofog()) return (DATA.cofog && DATA.cofog.tree) || [];
    var m = etatMode(); return (m.root && DATA.etat[m.root]) || (DATA.etat && DATA.etat.tree) || [];
  }
  function flatActions() {
    if (flatCache) return flatCache;
    var out = [];
    ((DATA.etat && DATA.etat.missionsTree) || []).forEach(function (m) {
      (m.children || []).forEach(function (p) {
        (p.children || []).forEach(function (a) {
          if (a.amount !== 0) out.push({ label: a.label, amount: a.amount, mission: m.label, programme: p.label });
        });
      });
    });
    out.sort(function (x, y) { return y.amount - x.amount; });
    flatCache = out; return out;
  }
  function levelList() {
    if (isFlat()) return flatActions();
    var list = rootList();
    for (var k = 0; k < state.path.length; k++) { var n = list[state.path[k]]; if (!n) return []; list = n.children || []; }
    return list.filter(function (n) { return n.amount > 0; }).slice().sort(function (a, b) { return b.amount - a.amount; });
  }
  function pathNodes() {
    if (isFlat()) return [];
    var list = rootList(), out = [];
    for (var k = 0; k < state.path.length; k++) { var n = list[state.path[k]]; if (!n) break; out.push(n); list = n.children || []; }
    return out;
  }
  function currentLevelList() {
    if (isFlat()) return [];
    var list = rootList();
    for (var k = 0; k < state.path.length; k++) list = (list[state.path[k]] && list[state.path[k]].children) || [];
    return list;
  }
  function levelName(d) {
    var c = cfg();
    if (!d) return c.rootLevel;
    var i = Math.min(d - 1, c.item.length - 1);
    return "Niveau " + (i + 1) + " · " + c.item[i];
  }
  function drillable(n) { return (n.children || []).filter(function (c) { return c.amount > 0; }).length > 0; }
  function grandTotal() {
    var d = dataset();
    if (isCofog()) return (d.meta && d.meta.total) || d.tree.reduce(function (s, n) { return s + n.amount; }, 0);
    return (d.meta && d.meta.totalCreditsBudgetaires) || (d.tree || []).reduce(function (s, n) { return s + (n.amount > 0 ? n.amount : 0); }, 0);
  }

  /* ---------------- Routage (identifiants stables = slugs) ---------------- */
  var routingReady = false, selfWrite = false;
  function buildHash() {
    var segs = [];
    if (isCofog()) segs.push("fonctions");
    else { segs.push("etat"); segs.push(MODE_SLUG[state.mode] || "themes"); }
    pathNodes().forEach(function (n) { segs.push(slug(n.label)); });
    var h = "/" + segs.join("/");
    if (state.q.trim()) h += "?f=" + encodeURIComponent(state.q.trim());
    return h;
  }
  function resolvePath(slugs) {
    if (isFlat()) return [];
    var list = rootList(), path = [];
    for (var s = 0; s < slugs.length; s++) {
      var idx = -1;
      for (var i = 0; i < list.length; i++) { if (list[i].amount > 0 && slug(list[i].label) === slugs[s]) { idx = i; break; } }
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
    var q = ""; try { q = new URLSearchParams(parts[1] || "").get("f") || ""; } catch (e) {}
    var pathSlugs;
    if (segs[0] === "etat") { state.world = "etat"; state.mode = SLUG_MODE[segs[1]] || "postes"; pathSlugs = segs.slice(2); }
    else { state.world = "cofog"; state.mode = "postes"; pathSlugs = segs[0] === "fonctions" ? segs.slice(1) : segs; }
    state.q = q; state.limit = 60;
    state.path = resolvePath(pathSlugs);
    sync();
  }

  /* ---------------- Navigation ---------------- */
  function drill(node) {
    if (!drillable(node)) return;
    var i = currentLevelList().indexOf(node);
    if (i < 0) return;
    state.path = state.path.concat([i]); state.q = ""; state.limit = 60; writeHash(true); sync(); focusHeading();
  }
  function goTo(d) { state.path = state.path.slice(0, d); state.q = ""; state.limit = 60; writeHash(true); sync(); focusHeading(); }
  function setMode(id) { state.mode = id; state.path = []; state.q = ""; state.limit = 60; writeHash(true); sync(); focusHeading(); }
  function setWorld(id) {
    if (id === state.world) return;
    state.world = id; state.mode = "postes"; state.path = []; state.q = ""; state.limit = 60;
    writeHash(true); sync(); focusHeading();
  }

  /* ---------------- Rendu ---------------- */
  function md0(eur) { return nf(Math.round(eur / 1e9)); }
  function render() {
    if (!ready()) { $("band-sentence").textContent = "Données indisponibles."; return; }
    var cofogTotal = (DATA.cofog && DATA.cofog.meta && DATA.cofog.meta.total) || 1672e9;
    var cofogYear = (DATA.cofog && DATA.cofog.meta && DATA.cofog.meta.year) || 2024;
    var grand = grandTotal();
    var list = levelList();
    var rawList = currentLevelList();
    var nodes = pathNodes();
    var depth = nodes.length;
    var total = list.reduce(function (s, n) { return s + n.amount; }, 0) || 1;
    var rootHue = depth ? state.path[0] : null;
    var flat = isFlat();
    var q = state.q.trim().toLowerCase();
    var matched = q ? list.filter(function (n) { return (n.label + " " + pretty(n.label) + " " + (n.mission || "") + " " + (n.programme || "")).toLowerCase().indexOf(q) >= 0; }) : list;
    var shown = matched.slice(0, state.limit);
    var max = shown.length ? shown[0].amount : 1;

    // Intro (le périmètre + l'année sont dits dans l'accroche)
    $("lead").innerHTML = isCofog()
      ? "La France dépense <b style=\"color:var(--ink)\">" + md0(grand) + " milliards d'euros</b> par an. Voici à quoi ils servent, de la plus grosse fonction à la plus petite. <span style=\"color:var(--mute)\">(Dernières données complètes : " + cofogYear + ".)</span>"
      : "Sur les " + md0(cofogTotal) + " milliards dépensés par la France, <b style=\"color:var(--ink)\">" + md0(grand) + " milliards passent par l'État</b> (budget 2026) — la part qu'on peut détailler jusqu'à la ligne.";

    // Toggle vue (mondes)
    $("world").innerHTML = WORLDS.map(function (w) {
      var on = w.id === state.world;
      return '<button type="button" data-world="' + w.id + '" aria-pressed="' + on + '" style="border:0;cursor:pointer;padding:8px 16px;border-radius:999px;font-size:14px;font-weight:600;letter-spacing:-.01em;background:' +
        (on ? "var(--ink)" : "transparent") + ';color:' + (on ? "var(--bg)" : "var(--soft)") + '">' + esc(w.label) + '</button>';
    }).join("");

    // KPIs
    function kpiLight(label, value, unit) {
      return '<div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:22px 24px">' +
        '<div style="font-size:13px;font-weight:600;color:var(--mute);letter-spacing:.02em;text-transform:uppercase">' + label + '</div>' +
        '<div class="tnum" style="margin-top:10px;font-size:34px;font-weight:700;letter-spacing:-.03em">' + value + ' <span style="font-size:17px;font-weight:600;color:var(--soft)">' + unit + '</span></div></div>';
    }
    var thirdLabel, thirdVal;
    if (isCofog()) {
      var top1 = DATA.cofog.tree[0];
      thirdLabel = "La première fonction pèse"; thirdVal = nf((top1.amount / grand) * 100, 0);
    } else {
      var top4 = (DATA.etat.tree || []).slice().sort(function (a, b) { return b.amount - a.amount; }).slice(0, 4).reduce(function (s, n) { return s + n.amount; }, 0);
      thirdLabel = "Les 4 premiers thèmes pèsent"; thirdVal = nf((top4 / grand) * 100, 0);
    }
    $("kpis").innerHTML =
      kpiLight("Total dépensé", nf(grand / 1e9, grand >= 1000e9 ? 0 : 1), "Md€") +
      '<div style="background:var(--inv-surface);color:var(--inv-ink);border-radius:18px;padding:22px 24px">' +
        '<div style="font-size:13px;font-weight:600;color:var(--inv-mute);letter-spacing:.02em;text-transform:uppercase">' + thirdLabel + '</div>' +
        '<div class="tnum" style="margin-top:10px;font-size:34px;font-weight:700;letter-spacing:-.03em;color:var(--inv-ink)">' + thirdVal + ' <span style="font-size:17px;font-weight:600;color:var(--inv-mute)">% du total</span></div></div>';

    // Bande 100 €
    $("band-title").textContent = "Sur 100 € dépensés" + (depth ? " en « " + pretty(nodes[depth - 1].label) + " »" : "");
    var bandNodes = list.filter(function (n) { return n.amount > 0; }).slice(0, 12);
    $("band").innerHTML = bandNodes.map(function (n, i) {
      var hueIdx = rootHue === null ? i : rootHue;
      var ri = rawList.indexOf(n);
      var lab = pretty(n.label);
      var short = (n.amount / total > 0.07) ? lab.split(" ")[0].replace(/[,:]/, "").slice(0, 18) : "";
      var title = lab + " — " + nf((n.amount / total) * 100, 1) + " €";
      var canDrill = !flat && ri >= 0 && drillable(n);
      return '<button type="button"' + (canDrill ? ' data-ri="' + ri + '"' : ' disabled') + ' aria-label="' + esc(title) + '" title="' + esc(title) + '" style="border:0;padding:0;cursor:' + (canDrill ? "pointer" : "default") + ';height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;transition:filter .15s;flex:' +
        (n.amount / 1e9) + ';background:' + color(hueIdx, depth) + '"><span aria-hidden="true" style="font-size:12px;font-weight:700;color:#fff;padding:0 8px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden">' + esc(short) + '</span></button>';
    }).join("");
    var k = Math.min(4, list.length);
    var top = list.slice(0, k);
    var topShare = (top.reduce(function (s, n) { return s + n.amount; }, 0) / total) * 100;
    $("band-sentence").textContent = list.length > 2
      ? "En tête : " + top.map(function (n) { return pretty(n.label); }).join(", ") + " — " + nf(topShare, 0) + " € sur 100 €."
      : (list.length === 1 ? "Ce niveau ne compte qu'une ligne : " + pretty(list[0].label) + "."
        : list.length + " lignes se partagent " + nf(total / 1e9, 1) + " Md€.");

    // Sous-modes (uniquement dans la vue État)
    if (isCofog()) { $("modes").innerHTML = ""; $("mode-hint").textContent = COFOG_CFG.hint; }
    else {
      $("modes").innerHTML = ETAT_MODES.map(function (mm) {
        var on = mm.id === state.mode;
        return '<button type="button" data-mode="' + mm.id + '" aria-pressed="' + on + '" style="border:0;cursor:pointer;padding:8px 16px;border-radius:999px;font-size:14px;font-weight:600;letter-spacing:-.01em;background:' +
          (on ? "var(--ink)" : "transparent") + ';color:' + (on ? "var(--bg)" : "var(--soft)") + '">' + esc(mm.label) + '</button>';
      }).join("");
      $("mode-hint").textContent = etatMode().hint;
    }

    // Fil d'Ariane
    var sep = '<span aria-hidden="true" style="color:var(--faint)">›</span>';
    var crumbLink = function (label, attrs, title) {
      return '<button type="button" ' + attrs + ' title="' + esc(title) + '" style="border:0;background:transparent;padding:0;cursor:pointer;color:var(--soft);font-size:14px;font-weight:600;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:280px">' + esc(label) + '</button>';
    };
    var bc = '<a href="index.html" title="Accueil — Le Relevé" style="display:flex;align-items:center;gap:6px;color:var(--soft);text-decoration:none;font-weight:600;letter-spacing:-.01em">' + HOME_SVG + '<span>Le Relevé</span></a>' + sep;
    if (depth) {
      bc += crumbLink(cfg().crumb, 'data-goto="0"', levelName(0)) + sep;
      for (var d = 0; d < depth - 1; d++) bc += crumbLink(pretty(nodes[d].label), 'data-goto="' + (d + 1) + '"', levelName(d + 1)) + sep;
    }
    bc += '<span aria-current="page" title="' + esc(levelName(depth)) + '" style="font-weight:700;color:var(--ink);letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:420px">' + esc(depth ? pretty(nodes[depth - 1].label) : cfg().crumb) + '</span>';
    $("breadcrumb").innerHTML = bc;

    // Bouton retour contextuel (remonte d'un niveau) — visible seulement en drill-down
    var backParent = depth > 1 ? pretty(nodes[depth - 2].label) : cfg().crumb;
    $("backbar").innerHTML = depth
      ? '<button type="button" data-goto="' + (depth - 1) + '" aria-label="Retour vers ' + esc(backParent) + '" title="Retour vers ' + esc(backParent) + '" style="margin-top:22px;display:inline-flex;align-items:center;gap:7px;border:1px solid var(--border);background:var(--surface);color:var(--soft);border-radius:999px;padding:9px 16px;font-size:14px;font-weight:600;letter-spacing:-.01em;cursor:pointer"><span aria-hidden="true" style="font-size:16px;line-height:1">‹</span> Retour · ' + esc(backParent) + '</button>'
      : "";

    // Compteur + lignes
    $("count").textContent = matched.length
      ? (matched.length > shown.length ? shown.length + " sur " + matched.length + " lignes" : matched.length + (matched.length > 1 ? " lignes" : " ligne")) +
        " · total " + nf(matched.reduce(function (s, n) { return s + n.amount; }, 0) / 1e9, 1) + " Md€"
      : "";
    $("rows").innerHTML = shown.map(function (n, i) {
      var hueIdx = rootHue === null ? (flat ? i : list.indexOf(n)) : rootHue;
      var kids = (n.children || []).filter(function (c) { return c.amount > 0; }).length;
      var ri = rawList.indexOf(n);
      var canDrill = !flat && kids > 0 && ri >= 0;
      var sub = (n.amount < 0 ? "Somme retirée d'une autre ligne, pour ne pas la compter deux fois · " : "") +
        (n.mission ? pretty(n.mission) + " › " + pretty(n.programme) : (kids ? kids + (kids > 1 ? " lignes de détail" : " ligne de détail") : ""));
      var w = Math.max(1.5, (Math.abs(n.amount) / max) * 100);
      return '<button type="button"' + (canDrill ? ' data-ri="' + ri + '"' : "") + ' style="text-align:left;width:100%;border:1px solid var(--border);background:var(--surface);border-radius:16px;padding:16px 20px;cursor:' + (canDrill ? "pointer" : "default") + ';display:grid;grid-template-columns:32px minmax(160px,1.35fr) 2fr auto 18px;align-items:center;gap:18px">' +
        '<span class="tnum" style="font-size:13px;font-weight:600;color:var(--faint)">' + (i + 1) + '</span>' +
        '<span style="display:block;min-width:0"><span style="display:block;font-size:15px;font-weight:600;letter-spacing:-.01em;line-height:1.35;text-wrap:pretty">' + esc(pretty(n.label)) + '</span>' +
        '<span style="display:block;font-size:12px;color:var(--mute);line-height:1.4;margin-top:3px;text-wrap:pretty">' + esc(sub) + '</span></span>' +
        '<span style="display:flex;align-items:center;gap:12px"><span style="flex:1;height:12px;border-radius:999px;background:var(--track);overflow:hidden;display:block">' +
        '<span style="display:block;height:100%;border-radius:999px;transition:width .5s cubic-bezier(.22,1,.36,1);width:' + w.toFixed(1) + '%;background:' + (n.amount < 0 ? NEG : color(hueIdx, depth)) + '"></span></span>' +
        '<span class="tnum" style="font-size:15px;font-weight:700;white-space:nowrap;min-width:82px;text-align:right">' + nf(n.amount / 1e9, Math.abs(n.amount) >= 1e10 ? 1 : 2) + ' Md€</span></span>' +
        '<span style="text-align:right;line-height:1.3;min-width:104px"><span class="tnum" style="display:block;font-size:15px;font-weight:700;color:' + (n.amount < 0 ? "var(--mute)" : "var(--blue)") + '">' + nf((n.amount / total) * 100, 1) + ' %</span><span class="tnum" style="display:block;font-size:11px;color:var(--mute)">sur ' + md0(total) + ' Md</span>' + (depth ? '<span class="tnum" style="display:block;font-size:11px;color:var(--faint);margin-top:2px">' + nf((n.amount / grand) * 100, 1) + ' % du total</span>' : '') + '</span>' +
        '<span style="color:var(--faint);font-size:15px;text-align:right">' + (canDrill ? "→" : "") + '</span></button>';
    }).join("");
    $("empty").hidden = matched.length !== 0;

    var more = $("more");
    if (matched.length > shown.length) { more.hidden = false; more.textContent = "Afficher " + Math.min(120, matched.length - shown.length) + " lignes de plus  ·  " + (matched.length - shown.length) + " restantes"; }
    else { more.hidden = true; }

    // Encart de recadrage (uniquement vue État)
    var recapSection = $("recap-section");
    if (isCofog()) { recapSection.style.display = "none"; }
    else {
      recapSection.style.display = "";
      $("recap").innerHTML =
        recapBar("État (détaillé ici)", md0(grand) + " Md€", (grand / cofogTotal) * 100, "var(--blue)") +
        recapBar("Tout l'argent public", md0(cofogTotal) + " Md€", 100, "var(--bar-mute)");
    }

    renderSource();
    var qi = $("query");
    if (qi && document.activeElement !== qi && qi.value !== state.q) qi.value = state.q;
  }
  function recapBar(label, value, w, bg) {
    return '<div style="display:flex;align-items:center;gap:12px">' +
      '<span style="width:120px;font-size:13px;color:var(--mute);flex-shrink:0">' + label + '</span>' +
      '<span style="flex:1;min-width:0;display:block"><span style="display:block;height:26px;border-radius:8px;background:' + bg + ';width:' + w.toFixed(1) + '%"></span></span>' +
      '<span class="tnum" style="font-size:13px;font-weight:700;white-space:nowrap;width:78px;text-align:right;flex-shrink:0">' + value + '</span></div>';
  }

  var SRC_LABELS = {
    api: "Source : appel direct à l'API open data",
    cache: "Source : cache local",
    snapshot: "Source : instantané embarqué (hors-ligne)"
  };
  function renderSource() {
    var el = $("source-badge"); if (!el) return;
    var d = dataset();
    var src = isCofog() ? (window.ATLASDATA && window.ATLASDATA.cofogSource) : (window.ATLASDATA && window.ATLASDATA.source);
    src = src || "snapshot";
    var who = isCofog() ? "Eurostat" : "Bercy";
    var when = "";
    try {
      var iso = d && d.meta && d.meta.source && d.meta.source.fetchedAt;
      if (iso) when = " · " + who + " · " + new Date(iso).toLocaleDateString("fr-FR");
      else when = " · " + who;
    } catch (e) {}
    el.textContent = (SRC_LABELS[src] || SRC_LABELS.snapshot) + when;
  }

  function sync() { if (ready()) render(); }

  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-world],[data-mode],[data-goto],[data-ri]") : null;
    if (!t) return;
    if (t.hasAttribute("data-world")) return setWorld(t.getAttribute("data-world"));
    if (t.hasAttribute("data-mode")) return setMode(t.getAttribute("data-mode"));
    if (t.hasAttribute("data-goto")) return goTo(parseInt(t.getAttribute("data-goto"), 10));
    if (t.hasAttribute("data-ri")) { var node = currentLevelList()[parseInt(t.getAttribute("data-ri"), 10)]; if (node) drill(node); }
  });
  var moreBtn = $("more");
  if (moreBtn) moreBtn.addEventListener("click", function () { state.limit += 120; sync(); });
  var qbox = $("query");
  if (qbox) qbox.addEventListener("input", function () { state.q = qbox.value; state.limit = 60; writeHash(false); sync(); });

  window.addEventListener("hashchange", function () {
    if (selfWrite) { selfWrite = false; return; }
    if (ready()) applyHash();
  });

  // Rafraîchir le monde courant.
  var refreshBtn = $("refresh");
  if (refreshBtn) refreshBtn.addEventListener("click", function () {
    var DS = window.ATLASDATA; if (!DS) return;
    refreshBtn.disabled = true; var prev = refreshBtn.textContent; refreshBtn.textContent = "Actualisation…";
    var p;
    if (isCofog()) { try { localStorage.removeItem("atlas-cofog-v1"); } catch (e) {} p = DS.getCofog().then(function (d) { DATA.cofog = d; }); }
    else p = DS.refresh().then(function (d) { DATA.etat = d; flatCache = null; });
    p.catch(function () {}).then(function () { refreshBtn.disabled = false; refreshBtn.textContent = prev; sync(); });
  });

  /* ---------------- Amorçage ---------------- */
  function boot() {
    routingReady = true;
    if (location.hash.length > 2) applyHash();
    else { render(); writeHash(false); }
  }
  $("band-sentence").textContent = "Chargement des données…";
  var DS = window.ATLASDATA;
  var snapCofog = (window.ATLAS && window.ATLAS.cofog) || null;
  var snapEtat = (window.ATLAS && window.ATLAS.expenses) || null;
  var pE = DS && DS.getExpenses ? DS.getExpenses().catch(function () { return snapEtat; }) : Promise.resolve(snapEtat);
  var pC = DS && DS.getCofog ? DS.getCofog().catch(function () { return snapCofog; }) : Promise.resolve(snapCofog);
  Promise.all([pC, pE]).then(function (r) {
    DATA.cofog = r[0] || snapCofog; DATA.etat = r[1] || snapEtat; flatCache = null;
    if (!DATA.cofog && !DATA.etat) { $("band-sentence").textContent = "Données indisponibles. Réessaie."; return; }
    if (!DATA.cofog) state.world = "etat";
    boot();
  });
})();
