document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeButton = document.querySelector(".close-button");

  const projectButtons = document.querySelectorAll(".project-button");

  const projectDetails = {
    "Projet Dashbord":
      "Projet d'école. Dashbord qui reprend les données de l'INSEE sur les salaires en France. Certains indicateurs dynamiques mettent en avant les disparités entre les genres.",
    "Projet Portfolio":
      "Projet personnel. Site Web qui m'a permis de mettre en pratique mes connaissances en HTML, CSS et JS afin de mettre en avant mes compétences.",
    HammerSpoon:
      "Projet personnel. Raccourcis personnalisés pour les applications de bureau ainsi que des keymaps pour améliorer mon window management.",
    "Projet BDD":
      "Projet d'école. Site de gestion d'événements. Ce projet m'a permis de mettre en pratique mes connaissances en PHP et SQL.",
    "Projet Neovim":
      "Projet personnel. Configuration de l'IDE de mes rêves. Au total plus de 40 plugins et 400 keymaps qui rendent mon workflow extrêment fluide.",
    "Projet Musique":
      "Projet personnel. Petite application avec un interface graphipe pour télécharger de la musique simplement à partir de liens Youtube.",
    "Projet GUI Python":
      'Projet personnel. Commande shell "pyvenvs" qui me permet de sélectionner mes différents environements virtuels pythons avec un interface graphique.',
    "Projet IA Echecs":
      "Projet personnel. Algorithme en python capable de jouer une partie d'échecs. Je me suis inspiré de Deep Blue développé par IBM. L'algorithme utilisé est un élagage alpha-beta.",
    Optimisation:
      "Projet personnel. Optimisation du réseau éléctrique de la ville de Bayonne. Utilisation de trois algorithme : Prime, Dijkstra, k-moyenne.",
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
