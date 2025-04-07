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
  /* Biliographie */
  "biliographie-title": {
    fr: "Bibliographie",
    en: "Bibliography",
  },
  "bibliographie-intro": {
    fr: "Je regroupe ici mes livres de mathématiques et d'informatique !",
    en: "I group here my books of mathematics and computer science !",
  },
  "math-title": {
    fr: "Mes livres de Mathématiques",
    en: "My books of Mathematics",
  },
  "info-title": {
    fr: "Mes livres d'Informatique",
    en: "My books of Computer Science",
  },
  /* Loisirs */
  "loisirs-title": {
    fr: "Mes Loisirs",
    en: "My Hobbies",
  },
  "loisirs-intro": {
    fr: "L'une de mes grandes passions est la photographie!",
    en: "One of my great passions is photography!",
  },
  /* Home Page */
  "hero-title": {
    fr: "Bienvenue sur mon site",
    en: "Welcome to my website",
  },
  "hero-intro": {
    fr: "Plongez dans mon univers, découvrez mes projets et bien plus encore !",
    en: "Dive into my universe, discover my projects and much more !",
  },
  "infos-simple": {
    fr: `À propos de moi

Actuellement étudiant en Data et Computer Engineering à l'École Polytechnique Universitaire de Lille.
Je suis passionné de Mathématiques et d'Informatique, notamment de Théorie des Probabilités et d'Intelligence Artificielle.`,
    en: `About Me

Currently studying Data and Computer Engineering at the Polytechnic University School of Lille.
I'm passionate about Mathematics and Computer Science, particularly Probability Theory and Artificial Intelligence.`,
  },
  parcours: {
    fr: `Mon Parcours

● École Polytechnique Universitaire de Lille
● Classes Préparatoires aux Grandes Ecoles : Charlemagne Paris 
● Loréat 2021 de Du Pays Basque aux Grandes Ecoles`,
    en: `My Journey

● Polytechnic University School of Lille
● Preparatory Classes for the Grandes Écoles: Charlemagne Paris
● 2021 Laureate of From the Basque Country to the Grandes Écoles`,
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
      if (element.classList.contains("typewriter")) {
        // On met à jour le data-text et on vide le contenu visible
        element.setAttribute("data-text", translations[id][lang]);
        element.textContent = ""; // Réinitialise le contenu pour relancer l'animation

        // Si tu utilises une fonction d'animation personnalisée, relance-la ici :
        restartTypewriterAnimation(element);
      } else {
        element.textContent = translations[id][lang];
      }
    }
  });

  const langToggle = document.getElementById("lang-toggle");

  // Masquer avec flou
  langToggle.classList.add("hidden-lang-toggle");
  langToggle.classList.remove("visible-lang-toggle");

  // Réafficher après 10 secondes avec effet de flou inversé
  setTimeout(() => {
    langToggle.classList.remove("hidden-lang-toggle");
    langToggle.classList.add("visible-lang-toggle");
  }, 10000); // 10 000 ms = 10 s
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

function restartTypewriterAnimation(element) {
  const text = element.getAttribute("data-text");
  let i = 0;
  element.textContent = "";

  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50); // vitesse d'écriture
}
