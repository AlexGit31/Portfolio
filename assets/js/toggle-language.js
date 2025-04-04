function toggleLanguage() {
  const currentLang = localStorage.getItem("lang") || "fr";
  const newLang = currentLang === "fr" ? "en" : "fr";

  // Animation de transition
  if (newLang === "en") {
    document.getElementById("flag-fr").style.transform = "translateY(-100%)";
    document.getElementById("flag-en").style.transform = "translateY(0)";
  } else {
    document.getElementById("flag-fr").style.transform = "translateY(0)";
    document.getElementById("flag-en").style.transform = "translateY(100%)";
  }

  // Mise à jour du contenu
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display =
      el.getAttribute("data-lang") === newLang ? "block" : "none";
  });

  // Sauvegarde du choix dans le localStorage
  localStorage.setItem("lang", newLang);
}

// Applique la langue au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";

  if (savedLang === "en") {
    document.getElementById("flag-fr").style.transform = "translateY(-100%)";
    document.getElementById("flag-en").style.transform = "translateY(0)";
  }

  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display =
      el.getAttribute("data-lang") === savedLang ? "block" : "none";
  });
});
