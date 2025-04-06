const translations = {
  /* Page de CV */
  "my-resume-title": {
    fr: "Mon CV",
    en: "My Resume",
  },
  "my-resume-intro": {
    fr: "Découvrez mon parcours et mes compétences à travers mon CV!",
    en: "Explore my background and skills through my CV!",
  },
  "personal-present-title": {
    fr: "Mon Parcours",
    en: "My Career Path",
  },

  "personal-present": {
    fr: "Lauréat d’une bourse privée, j’ai quitté ma région à 17 ans pour suivre une classe préparatoire à Paris. Après deux années exigeantes, j’ai entrepris un tour du monde en sac à dos avant de relever le défi des concours d’ingénieurs en candidat libre. Aujourd’hui, je poursuis mon parcours à l’École Polytechnique Universitaire de Lille, où je développe mes compétences en informatique et statistiques avec détermination et passion.",
    en: "Recipient of a private scholarship, I left my region at the age of 17 to attend a preparatory class in Paris. After two demanding years, I embarked on a backpacking journey around the world before taking on the challenge of engineering entrance exams as an independent candidate. Today, I am pursuing my studies at the Polytechnic University School of Lille, where I am developing my skills in computer science and statistics with determination and passion.",
  },
  "prog-skills": {
    fr: "Compétences en Programmation",
    en: "Programming Skills",
  },
  "soft-skills-title": {
    fr: "Mes Soft Skills",
    en: "My Soft Skills",
  },
  /* Page de Contact */
  "My-Contact-Title": {
    fr: "Contactez-moi",
    en: "Contact Me",
  },
  "My-Contact-Intro": {
    fr: "N'hésitez pas à me contacter en m'envoyant un email à l'une des adresses suivante !",
    en: "Don't hesitate to contact me by sending an email to one of the following addresses!",
  },
  /*Nave Bar*/
  "nav-cv": {
    fr: "CV",
    en: "Resume",
  },
  "nav-loisirs": {
    fr: "Loisirs",
    en: "Hobbies",
  },
  "nav-projets": {
    fr: "Projets",
    en: "Projects",
  },
  "nav-bibliographie": {
    fr: "Bibliographie",
    en: "Bibliography",
  },
};

function toggleLanguage2() {
  const currentLang = localStorage.getItem("lang") || "fr";
  const newLang = currentLang === "fr" ? "en" : "fr";

  // Mise à jour du contenu
  updateContent2(newLang);

  // Animation de transition
  if (newLang === "en") {
    document.getElementById("flag-fr").style.transform = "translateY(-100%)";
    document.getElementById("flag-en").style.transform = "translateY(0)";
  } else {
    document.getElementById("flag-fr").style.transform = "translateY(0)";
    document.getElementById("flag-en").style.transform = "translateY(100%)";
  }

  // Sauvegarde du choix dans le localStorage
  localStorage.setItem("lang", newLang);
}

// Fonction qui remplace le texte dans les éléments HTML
function updateContent2(lang) {
  Object.keys(translations).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = translations[id][lang];
    }
  });
}

// Applique la langue au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  updateContent2(savedLang);

  if (savedLang === "en") {
    document.getElementById("flag-fr").style.transform = "translateY(-100%)";
    document.getElementById("flag-en").style.transform = "translateY(0)";
  }
});
