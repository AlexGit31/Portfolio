document.addEventListener("DOMContentLoaded", function () {
  const yearDividers = document.querySelectorAll(".year-divider");

  yearDividers.forEach((divider) => {
    const yearText = divider.textContent.trim();
    divider.textContent = ""; // On vide le contenu initial

    const line = document.createElement("div");
    line.classList.add("line-animation");

    const yearSpan = document.createElement("span");
    yearSpan.classList.add("year-text");

    for (let letter of yearText) {
      const letterSpan = document.createElement("span");
      letterSpan.textContent = letter;
      letterSpan.classList.add("letter");
      yearSpan.appendChild(letterSpan);
    }

    divider.appendChild(line);
    divider.appendChild(yearSpan);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            line.classList.add("draw-line");
            setTimeout(() => revealLetters(yearSpan), 1000); // Démarrage après le tracé
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(divider);
  });

  function revealLetters(element) {
    const letters = element.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("show");
      }, index * 100); // Délai entre chaque lettre
    });
  }
});
