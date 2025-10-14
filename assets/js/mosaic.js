// Code pour la mosaïque :

// ---------------------------
// 1. Mélange aléatoire
// ---------------------------
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// ---------------------------
// 2. Génération mosaïque aléatoire
// ---------------------------
function generateMosaic() {
  const mosaicContainer = document.querySelector(".mosaic-container");
  if (!mosaicContainer) return;

  const items = Array.from(mosaicContainer.querySelectorAll(".mosaic-item"));
  shuffleArray(items);

  mosaicContainer.innerHTML = "";
  items.forEach((item) => mosaicContainer.appendChild(item));
}

// ---------------------------
// 3. Lightbox mosaïque
// ---------------------------
let currentIndexMosaic = 0;
let mosaicImages = [];

function openLightboxMosaic(index) {
  const lightbox = document.getElementById("lightbox-mosaic");
  const lightboxImg = document.getElementById("lightbox-img-mosaic");

  currentIndexMosaic = index;
  lightboxImg.src = mosaicImages[currentIndexMosaic].querySelector("img").src;
  lightbox.style.display = "flex";
}

function closeLightboxMosaic() {
  document.getElementById("lightbox-mosaic").style.display = "none";
}

function showNextMosaic() {
  currentIndexMosaic = (currentIndexMosaic + 1) % mosaicImages.length;
  document.getElementById("lightbox-img-mosaic").src =
    mosaicImages[currentIndexMosaic].querySelector("img").src;
}

function showPrevMosaic() {
  currentIndexMosaic =
    (currentIndexMosaic - 1 + mosaicImages.length) % mosaicImages.length;
  document.getElementById("lightbox-img-mosaic").src =
    mosaicImages[currentIndexMosaic].querySelector("img").src;
}

// ---------------------------
// 4. Swipe mobile
// ---------------------------
let touchStartX = 0;

function handleTouchStartMosaic(e) {
  touchStartX = e.touches[0].clientX;
}

function handleTouchEndMosaic(e) {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      showNextMosaic();
    } else {
      showPrevMosaic();
    }
  }
}

// ---------------------------
// 5. Initialisation
// ---------------------------
window.addEventListener("load", () => {
  generateMosaic();

  mosaicImages = Array.from(document.querySelectorAll(".mosaic-item"));

  mosaicImages.forEach((item, index) => {
    item.addEventListener("click", () => openLightboxMosaic(index));
  });

  // Boutons
  document
    .getElementById("close-btn-mosaic")
    .addEventListener("click", closeLightboxMosaic);
  document
    .getElementById("next-btn-mosaic")
    .addEventListener("click", showNextMosaic);
  document
    .getElementById("prev-btn-mosaic")
    .addEventListener("click", showPrevMosaic);

  // Swipe mobile
  const lightbox = document.getElementById("lightbox-mosaic");
  lightbox.addEventListener("touchstart", handleTouchStartMosaic, false);
  lightbox.addEventListener("touchend", handleTouchEndMosaic, false);
});

// Pour optimiser le chargement les photos :

document.querySelectorAll("img").forEach((img) => {
  img.loading = "lazy";
});
