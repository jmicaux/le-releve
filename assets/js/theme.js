/* Atlas — bascule de thème clair/sombre (façon Linear).
   Persiste le choix (localStorage) ; l'OS reste le défaut sans choix.
   Émet un événement "themechange" pour que les graphiques se re-rendent. */
(function () {
  "use strict";
  var root = document.documentElement;
  var KEY = "atlas-theme";

  function systemDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function effective() {
    var t = root.getAttribute("data-theme");
    return t ? t : systemDark() ? "dark" : "light";
  }

  var btn = document.getElementById("theme-toggle");
  function updateBtn() {
    if (!btn) return;
    var isDark = effective() === "dark";
    btn.textContent = isDark ? "☀" : "☾";
    var label = isDark ? "Passer en thème clair" : "Passer en thème sombre";
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  }

  function announce() {
    window.dispatchEvent(new CustomEvent("themechange", { detail: effective() }));
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {}
    updateBtn();
    announce();
  }

  if (btn) {
    btn.addEventListener("click", function () {
      setTheme(effective() === "dark" ? "light" : "dark");
    });
  }

  // Suit l'OS tant que l'utilisateur n'a pas choisi explicitement.
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function () {
      if (!root.getAttribute("data-theme")) {
        updateBtn();
        announce();
      }
    });

  // Expose l'état courant pour les scripts (ex. ECharts).
  window.atlasTheme = { effective: effective };

  updateBtn();
})();
