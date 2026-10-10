/* ==========================================================
   OCTOBRE ROSE - main.js
   Script général : menu pour petits écrans + année du footer.
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
  var bouton = document.querySelector(".nav-toggle");
  var menu = document.getElementById("site-nav");

  function fermerMenu() {
    if (!bouton || !menu) return;
    menu.classList.remove("open");
    bouton.setAttribute("aria-expanded", "false");
    bouton.querySelector(".nav-label").textContent = "Menu";
  }

  if (bouton && menu) {
    bouton.addEventListener("click", function () {
      var ouvert = menu.classList.toggle("open");
      bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
      bouton.querySelector(".nav-label").textContent = ouvert ? "Fermer" : "Menu";
    });

    // Fermer le menu avec la touche Échap
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        fermerMenu();
        bouton.focus();
      }
    });

    // Fermer le menu après un clic sur un lien
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") fermerMenu();
    });
  }

  // Année automatique dans le footer
  var annee = document.getElementById("annee");
  if (annee) annee.textContent = new Date().getFullYear();
});
