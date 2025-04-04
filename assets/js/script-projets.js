document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".project-card, .year-divider");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // On arrête d'observer une fois l'élément visible
        }
      });
    },
    {
      threshold: 0.2, // Apparition dès que 20% de l'élément est visible
    },
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
