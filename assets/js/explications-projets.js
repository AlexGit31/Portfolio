document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeButton = document.querySelector(".close-button");

  const projectButtons = document.querySelectorAll(".project-button");

  const projectDetails = {
    // Version Française
    "Projet Fullstack":
      "Projet Fullstack, épuré et zen frontend en react et typeScript et backend en node. Gestion de base de donnée d'utilisateur et pages sécurisées par tokens JWT.",
    "Projet Graphe":
      "Projet d'école. Algorithme d'optimisation et structure de données avancées.",
    "Projet Dashbord":
      "Projet d'école. Dashbord qui reprend les données de l'INSEE sur les salaires en France. Certains indicateurs dynamiques mettent en avant les disparités entre les genres.",
    "Projet Portfolio":
      "Projet personnel. Site Web qui m'a permis de mettre en pratique mes connaissances en HTML, CSS et JS afin de mettre en avant mes compétences.",
    "Projet HammerSpoon":
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
    // Version Anglaise
    "Fullstack Project":
      "Fullstack project, clean and zen frontend in react and typeScript and backend in node. User database and secure pages with JWT tokens.",
    "Graph Project":
      "School project. Optimization algorithm and advanced data structures.",
    "Dashbord Project":
      "School project. Dashboard that takes data from INSEE on salaries in France. Some dynamic indicators highlight gender disparities.",
    Portfolio:
      "Personal project. Website that allowed me to put my knowledge in HTML, CSS and JS in order to highlight my skills.",
    "HammerSpoon Project":
      "Personal project. Custom shortcuts for applications and keymaps to improve my window management.",
    "Database Project":
      "School project. Event management website. This project allowed me to put my knowledge in PHP and SQL.",
    "Neovim Project":
      "Personal project. The IDE of my dreams. Total of 40 plugins and 400 keymaps that make my workflow extremely fluid.",
    "Music Project":
      "Personal project. Small application with a graphical interface to download music simply from Youtube links.",
    "Python GUI Project":
      'Personal project. Shell command "pyvenvs" that allows me to select different Python virtual environments with a graphical interface.',
    "Chess IA Project":
      "Personal project. Python algorithm capable of playing a chess game. I was inspired by Deep Blue developed by IBM. The algorithm used is alpha-beta pruning.",
    Optimization:
      "Personal project. Optimization of the electricity network of the city of Bayonne. Use of three algorithms: Prime, Dijkstra, k-means.",
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
