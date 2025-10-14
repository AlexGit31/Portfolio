document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner toutes les images de la galerie principale
  const galleryImages = document.querySelectorAll(".gallery-container img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  let currentIndex = 0;
  const imagesArray = Array.from(galleryImages);

  // Ouvrir la lightbox
  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = imagesArray[currentIndex].src;
    lightbox.classList.add("visible");
  }

  // Fermer la lightbox
  function closeLightbox() {
    lightbox.classList.remove("visible");
  }

  // Image suivante
  function showNext() {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    lightboxImg.src = imagesArray[currentIndex].src;
  }

  // Image précédente
  function showPrev() {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    lightboxImg.src = imagesArray[currentIndex].src;
  }

  // Ajouter événements aux images
  imagesArray.forEach((image, index) => {
    image.addEventListener("click", () => openLightbox(index));
  });

  // Boutons
  document
    .getElementById("close-btn-main")
    .addEventListener("click", closeLightbox);
  document.getElementById("next-btn-main").addEventListener("click", showNext);
  document.getElementById("prev-btn-main").addEventListener("click", showPrev);

  // Fermer en cliquant sur le fond
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Clavier
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("visible")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNext();
    if (event.key === "ArrowLeft") showPrev();
  });

  // Swipe mobile
  let touchStartX = 0;
  lightbox.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    false,
  );

  lightbox.addEventListener(
    "touchend",
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) showNext();
        else showPrev();
      }
    },
    false,
  );
});
