/* Le Relevé — source de données des Sorties.
   Runtime : fetch LIVE de l'API open data (data.economie.gouv.fr) + cache
   localStorage (TTL), repli sur le snapshot embarqué (window.ATLAS.expenses)
   hors-ligne / file://. Aucun run manuel requis pour rafraîchir les données. */
window.ATLASDATA = (function () {
  "use strict";

  var EXPORT = "https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/plf-2026-budget-vert/exports/json";
  var PARAMS = "?where=" + encodeURIComponent('type_depense="Crédits budgétaires"') +
    "&select=" + encodeURIComponent("mission, programme, action_si_credit_budgetaire as action, plf_2026_cp_ou_prevision_2026_si_depense_fiscale as cp");
  var CACHE_KEY = "atlas-expenses-plf2026-v1";
  var TTL = 7 * 24 * 3600 * 1000; // 7 jours (données annuelles)

  var GROUPS = [
    { key: "retraites", label: "Retraites & pensions", missions: ["Pensions", "Régimes sociaux et de retraite"] },
    { key: "education", label: "Éducation & recherche", missions: ["Enseignement scolaire", "Recherche et enseignement supérieur"] },
    { key: "defense", label: "Défense & anciens combattants", missions: ["Défense", "Monde combattant, mémoire et liens avec la Nation"] },
    { key: "collectivites", label: "Collectivités territoriales", missions: ["PSRCT", "Relations avec les collectivités territoriales"] },
    { key: "solidarite", label: "Solidarité & santé", missions: ["Solidarité, insertion et égalité des chances", "Santé"] },
    { key: "ue", label: "Union européenne", missions: ["PSRUE"] },
    { key: "territoires", label: "Cohésion des territoires", missions: ["Cohésion des territoires"] },
    { key: "ecologie", label: "Écologie & mobilités", missions: ["Écologie, développement et mobilité durables"] },
    { key: "securite", label: "Sécurité & justice", missions: ["Sécurités", "Justice", "Immigration, asile et intégration"] },
    { key: "travail", label: "Travail & emploi", missions: ["Travail, emploi et administration des ministères sociaux"] }
  ];

  var round = function (n) { return Math.round(n); };
  var bySizeDesc = function (a, b) { return b.amount - a.amount; };
  var nonzero = function (n) { return n.amount !== 0; };
  var positive = function (n) { return n.amount > 0; };

  function buildMissionsTree(rows) {
    var missions = {};
    rows.forEach(function (r) {
      if (!r.mission) return;
      var cp = r.cp || 0;
      var m = missions[r.mission] || (missions[r.mission] = { label: r.mission, amount: 0, progs: {} });
      m.amount += cp;
      var pgLabel = r.programme || "Autres crédits";
      var pg = m.progs[pgLabel] || (m.progs[pgLabel] = { label: pgLabel, amount: 0, actions: {} });
      pg.amount += cp;
      var acLabel = r.action || "Autres crédits";
      if (pg.actions[acLabel]) pg.actions[acLabel].amount += cp;
      else pg.actions[acLabel] = { label: acLabel, amount: cp };
    });
    function vals(o) { return Object.keys(o).map(function (k) { return o[k]; }); }
    var toNode = function (m) {
      return {
        label: m.label, amount: round(m.amount),
        children: vals(m.progs).map(function (pg) {
          return {
            label: pg.label, amount: round(pg.amount),
            children: vals(pg.actions).map(function (a) { return { label: a.label, amount: round(a.amount) }; }).filter(nonzero).sort(bySizeDesc)
          };
        }).filter(nonzero).sort(bySizeDesc)
      };
    };
    return vals(missions).map(toNode).filter(positive).sort(bySizeDesc);
  }

  function buildPostesTree(missionNodes) {
    var used = {}, postes = [];
    GROUPS.forEach(function (g) {
      var children = [], amount = 0;
      g.missions.forEach(function (label) {
        var mn = missionNodes.filter(function (x) { return x.label === label; })[0];
        if (mn) { children.push(mn); amount += mn.amount; used[label] = 1; }
      });
      if (children.length) postes.push({ key: g.key, label: g.label, amount: amount, children: children.sort(bySizeDesc) });
    });
    missionNodes.forEach(function (m) { if (!used[m.label]) postes.push(m); });
    return postes.sort(bySizeDesc);
  }

  function build(rows) {
    var missionsTree = buildMissionsTree(rows);
    var tree = buildPostesTree(missionsTree);
    var totalAll = missionsTree.reduce(function (a, m) { return a + m.amount; }, 0);
    return {
      meta: {
        title: "Dépenses du budget de l'État — PLF 2026 (crédits budgétaires)",
        unit: "EUR",
        totalCreditsBudgetaires: round(totalAll),
        source: { portal: "data.economie.gouv.fr", dataset: "plf-2026-budget-vert", api: EXPORT, fetchedAt: new Date().toISOString() }
      },
      items: tree.map(function (n) { return { key: n.key, label: n.label, amount: n.amount }; }),
      tree: tree,
      missionsTree: missionsTree
    };
  }

  function prune() {
    for (var i = localStorage.length - 1; i >= 0; i--) {
      var k = localStorage.key(i);
      if (k && k.indexOf("atlas-expenses") === 0) localStorage.removeItem(k);
    }
  }
  function readCache() {
    try {
      var e = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (e && e.data && Date.now() - e.ts < TTL) return e.data;
    } catch (err) {}
    return null;
  }
  function writeCache(data) {
    var entry = JSON.stringify({ ts: Date.now(), data: data });
    try { localStorage.setItem(CACHE_KEY, entry); }
    catch (err) { prune(); try { localStorage.setItem(CACHE_KEY, entry); } catch (e2) {} }
  }
  function fallback() { return (window.ATLAS && window.ATLAS.expenses) || null; }

  function fetchLive() {
    var ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 8000) : null;
    var clear = function () { if (timer) clearTimeout(timer); };
    return fetch(EXPORT + PARAMS, { headers: { Accept: "application/json" }, signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { clear(); if (!r.ok) throw new Error("API " + r.status); return r.json(); },
        function (e) { clear(); throw e; })
      .then(function (rows) { var out = build(rows); writeCache(out); return out; });
  }

  // Résout avec les dépenses ; expose la provenance sur window.ATLASDATA.source.
  function getExpenses() {
    var self = window.ATLASDATA;
    var cached = readCache();
    if (cached) { self.source = "cache"; return Promise.resolve(cached); }
    return fetchLive().then(function (out) { self.source = "api"; return out; })
      .catch(function (err) {
        var fb = fallback();
        if (fb) { self.source = "snapshot"; return fb; }
        throw err;
      });
  }

  // Force un appel live : vide le cache puis re-fetch (repli snapshot si échec).
  function refresh() {
    var self = window.ATLASDATA;
    try { localStorage.removeItem(CACHE_KEY); } catch (e) {}
    return fetchLive().then(function (out) { self.source = "api"; return out; })
      .catch(function (err) {
        var fb = fallback();
        if (fb) { self.source = "snapshot"; return fb; }
        throw err;
      });
  }

  // ---- COFOG : dépenses de toutes les administrations par fonction (Eurostat) ----
  var COFOG_BASE = "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/gov_10a_exp";
  var COFOG_KEY = "atlas-cofog-v1";
  var COFOG_TTL = 30 * 24 * 3600 * 1000; // 30 jours (donnée annuelle)
  var TOP_FR = {
    GF01: "Services publics généraux", GF02: "Défense", GF03: "Sécurité et justice",
    GF04: "Action économique", GF05: "Environnement", GF06: "Logement et cadre de vie",
    GF07: "Santé", GF08: "Culture, sport et loisirs", GF09: "Éducation", GF10: "Protection sociale"
  };
  function cofogUrl(year) {
    return COFOG_BASE + "?format=JSON&lang=fr&unit=MIO_EUR&na_item=TE&sector=S13&geo=FR&time=" + year;
  }
  function cofogParse(j, year) {
    var cat = j.dimension.cofog99.category, idx = cat.index, lab = cat.label, val = j.value;
    var vals = {};
    Object.keys(idx).forEach(function (code) {
      var v = val[idx[code]];
      if (v !== undefined && v !== null) vals[code] = { amount: Math.round(v * 1e6), label: lab[code] || code };
    });
    var tops = Object.keys(vals).filter(function (c) { return /^GF\d\d$/.test(c); }).sort();
    var tree = tops.map(function (code) {
      var kids = Object.keys(vals).filter(function (c) { return c.length === 6 && c.indexOf(code) === 0 && vals[c].amount > 0; })
        .map(function (c) { return { label: vals[c].label, amount: vals[c].amount }; })
        .sort(function (a, b) { return b.amount - a.amount; });
      return { key: code, label: TOP_FR[code] || vals[code].label, amount: vals[code].amount, children: kids };
    }).filter(function (n) { return n.amount > 0; }).sort(function (a, b) { return b.amount - a.amount; });
    var total = (vals.TOTAL && vals.TOTAL.amount) || tree.reduce(function (s, n) { return s + n.amount; }, 0);
    return {
      meta: { year: year, scope: "Toutes les administrations publiques", unit: "EUR", population: 68600000,
        classification: "Dépenses par fonction (COFOG)", total: total,
        source: { portal: "ec.europa.eu/eurostat", dataset: "gov_10a_exp", api: cofogUrl(year), fetchedAt: new Date().toISOString() } },
      tree: tree
    };
  }
  function cofogReadCache() {
    try { var e = JSON.parse(localStorage.getItem(COFOG_KEY)); if (e && e.data && Date.now() - e.ts < COFOG_TTL) return e.data; } catch (err) {}
    return null;
  }
  function cofogWriteCache(d) {
    try { localStorage.setItem(COFOG_KEY, JSON.stringify({ ts: Date.now(), data: d })); } catch (err) {}
  }
  function cofogFallback() { return (window.ATLAS && window.ATLAS.cofog) || null; }
  function cofogFetchYear(year) {
    var ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 8000) : null;
    return fetch(cofogUrl(year), { headers: { Accept: "application/json" }, signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { if (timer) clearTimeout(timer); if (!r.ok) throw new Error("Eurostat " + r.status); return r.json(); })
      .then(function (j) {
        var out = cofogParse(j, year);
        if (!out.tree.length) throw new Error("COFOG " + year + " vide");
        cofogWriteCache(out); return out;
      });
  }
  function getCofog() {
    var self = window.ATLASDATA;
    var cached = cofogReadCache();
    if (cached) { self.cofogSource = "cache"; return Promise.resolve(cached); }
    // Essaie l'année N-1 puis N-2 (la plus récente publiée).
    var years = [new Date().getFullYear() - 1, new Date().getFullYear() - 2];
    return cofogFetchYear(years[0])
      .catch(function () { return cofogFetchYear(years[1]); })
      .then(function (out) { self.cofogSource = "api"; return out; })
      .catch(function () { var fb = cofogFallback(); if (fb) { self.cofogSource = "snapshot"; return fb; } throw new Error("COFOG indisponible"); });
  }

  return { getExpenses: getExpenses, refresh: refresh, getCofog: getCofog, source: null, cofogSource: null, _build: build };
})();
