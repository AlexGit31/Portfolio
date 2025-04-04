document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeButton = document.querySelector(".close-button");

  const projectButtons = document.querySelectorAll(".project-button");

  const projectDetails = {
    "Projet A":
      "Description détaillée du projet A avec ses objectifs principaux et résultats obtenus.",
    "Projet B":
      "Un projet complet utilisant HTML/CSS et JavaScript pour créer un site dynamique.",
    "Projet C":
      "Un projet analytique avec des fonctionnalités avancées de visualisation de données.",
    "Projet D":
      "Une application basée sur Dash pour analyser les données boursières.",
    "Projet E":
      "Un projet Python explorant des algorithmes d'intelligence artificielle.",
  };

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectTitle = button
        .closest(".project-card")
        .querySelector(".project-title").textContent;
      modalTitle.textContent = projectTitle;
      modalDescription.textContent =
        projectDetails[projectTitle] ||
        "Aucune description détaillée disponible.";
      modal.style.display = "flex";
    });
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
