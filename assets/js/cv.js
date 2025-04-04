function renderStars() {
  const TOTAL_STARS = 5; // Nombre total d'étoiles par compétence

  const starContainers = document.querySelectorAll(".stars");

  starContainers.forEach((container) => {
    const rating = parseFloat(container.getAttribute("data-rating"));
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= TOTAL_STARS; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const fullStar = document.createElement("span");
      fullStar.classList.add("full");
      fullStar.innerHTML = "★";

      const emptyStar = document.createElement("span");
      emptyStar.classList.add("empty");
      emptyStar.innerHTML = "☆";

      const halfStar = document.createElement("span");
      halfStar.classList.add("half");
      halfStar.innerHTML = "★";

      if (i <= fullStars) {
        star.appendChild(fullStar);
      } else if (i === fullStars + 1 && hasHalfStar) {
        star.appendChild(emptyStar);
        star.appendChild(halfStar); // Demi-étoile
      } else {
        star.appendChild(emptyStar);
      }

      star.style.animationDelay = `${i * 0.15}s`;

      container.appendChild(star);
    }
  });
}

// ➡️ Déclenche l'animation uniquement au scroll
function handleScroll() {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    const rect = star.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      star.classList.add("visible");
    }
  });
}

window.onload = () => {
  renderStars();
  handleScroll(); // Vérifie si les étoiles sont déjà visibles au chargement
};

window.addEventListener("scroll", handleScroll); // Détection du scroll
