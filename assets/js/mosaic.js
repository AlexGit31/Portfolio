// Code pour la mosaïque :

document.addEventListener("DOMContentLoaded", () => {
  // 1. Ciblez le conteneur
  const container = document.querySelector(".mosaic-container");

  // --- Vos paramètres ---
  const totalPhotos = 55;
  const photoNumberStart = 2;
  const basePath = "./../assets/Photos/mosaique-web-opti/";
  // ------------------------

  // 2. Création de la chaîne HTML
  let htmlContent = "";
  for (let i = 0; i < totalPhotos; i++) {
    let photoIndex = photoNumberStart + i;
    let altIndex = i + 1;

    // --- LA MODIFICATION IMPORTANTE EST ICI ---
    // On n'utilise pas 'src', mais 'data-src'.
    // On ajoute aussi une classe 'lazy-load-target' au 'div' parent
    // pour que notre "surveillant" puisse le trouver.
    htmlContent += `
      <div class="mosaic-item lazy-load-target">
        <img 
          data-src="${basePath}photo${photoIndex}.JPG" 
          alt="Mosaïque ${altIndex}" 
        />
      </div>
    `;
  }

  // 3. Insérez le HTML (rapide et efficace)
  if (container) {
    container.innerHTML = htmlContent;
  } else {
    console.error(
      'Erreur : Le conteneur ".mosaic-container" n\'a pas été trouvé.',
    );
    return; // Arrête le script si le conteneur n'existe pas
  }

  // --- 4. AJOUT : L'INTERSECTION OBSERVER ---

  // On sélectionne tous les items que l'on veut "surveiller"
  const lazyItems = document.querySelectorAll(".lazy-load-target");

  // Configuration de l'observer
  const options = {
    // 'rootMargin' permet de charger l'image un peu avant
    // qu'elle n'arrive à l'écran (ex: 200px avant)
    rootMargin: "0px 0px 200px 0px",
    threshold: 0.01, // Se déclenche dès que 1% de l'item est visible
  };

  // La fonction qui sera appelée quand un item devient visible
  const lazyLoadCallback = (entries, observer) => {
    entries.forEach((entry) => {
      // Si l'item est maintenant visible ('isIntersecting')
      if (entry.isIntersecting) {
        const item = entry.target;
        const img = item.querySelector("img");

        // On prend le 'data-src' et on le met dans 'src'
        if (img && img.dataset.src) {
          img.src = img.dataset.src;

          // (Optionnel) On peut écouter l'événement 'onload'
          // de l'image pour ajouter une classe (ex: 'fade-in')
          img.onload = () => {
            img.style.opacity = "1"; // Effet simple de fondu
          };
        }

        // On arrête de surveiller cet item, son travail est fait
        observer.unobserve(item);
      }
    });
  };

  // On crée l'observer et on lui dit quoi faire
  const observer = new IntersectionObserver(lazyLoadCallback, options);

  // On lance la surveillance sur tous nos items
  lazyItems.forEach((item) => {
    observer.observe(item);
  });
});

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
