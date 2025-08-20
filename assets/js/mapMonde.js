// --- Config des lieux visités ---
const PLACES = [
  // France
  {
    name: "Paris, France",
    lat: 48.8566,
    lng: 2.3522,
    photos: [
      "/assets/Photos/France/Paris/paris1.png",
      "/assets/Photos/France/Paris/paris2.png",
      "/assets/Photos/France/Paris/paris3.png",
      "/assets/Photos/France/Paris/paris4.png",
    ],
  },
  {
    name: "Bayonne, France",
    lat: 43.4929,
    lng: -1.4748,
    photos: [
      "/assets/Photos/France/Bayonne/bayonne1.png",
      "/assets/Photos/France/Bayonne/bayonne2.png",
      "/assets/Photos/France/Bayonne/bayonne3.png",
    ],
  },
  {
    name: "Anglet, France",
    lat: 43.48,
    lng: -1.521,
    photos: ["/assets/Photos/France/Anglet/anglet1.png"],
  },
  {
    name: "Biarritz, France",
    lat: 43.4832,
    lng: -1.5586,
    photos: [
      "/assets/Photos/France/Biarritz/biarritz1.png",
      "/assets/Photos/France/Biarritz/biarritz2.png",
      "/assets/Photos/France/Biarritz/biarritz3.png",
      "/assets/Photos/France/Biarritz/biarritz4.png",
    ],
  },
  {
    name: "Bordeaux, France",
    lat: 44.8378,
    lng: -0.5792,
    photos: [],
  },
  {
    name: "Toulouse, France",
    lat: 43.6047,
    lng: 1.4442,
    photos: [],
  },
  {
    name: "Lille, France",
    lat: 50.6292,
    lng: 3.0573,
    photos: ["/assets/Photos/France/Lille/lille1.png"],
  },
  {
    name: "Menton, France",
    lat: 43.7745,
    lng: 7.4975,
    photos: [
      "/assets/Photos/France/Menton/menton1.png",
      "/assets/Photos/France/Menton/menton2.png",
      "/assets/Photos/France/Menton/menton3.png",
      "/assets/Photos/France/Menton/menton4.png",
    ],
  },
  {
    name: "Nice, France",
    lat: 43.7102,
    lng: 7.262,
    photos: [],
  },
  {
    name: "Versailles, France",
    lat: 48.8049,
    lng: 2.1204,
    photos: [
      "/assets/Photos/France/Versailles/versailles1.png",
      "/assets/Photos/France/Versailles/versailles2.png",
    ],
  },

  // Angleterre
  {
    name: "Londres, Angleterre",
    lat: 51.5074,
    lng: -0.1278,
    photos: [],
  },
  {
    name: "Brighton, Angleterre",
    lat: 50.8225,
    lng: -0.1372,
    photos: [],
  },
  // Monaco
  {
    name: "Monaco",
    lat: 43.7384,
    lng: 7.4246,
    photos: ["/assets/Photos/Monaco/monaco1.png"],
  },

  // Italie
  {
    name: "Florence, Italie",
    lat: 43.7699,
    lng: 11.2556,
    photos: [],
  },
  {
    name: "Murano, Italie",
    lat: 45.4586,
    lng: 12.3547,
    photos: [],
  },
  {
    name: "Burano, Italie",
    lat: 45.4857,
    lng: 12.416,
    photos: [],
  },
  {
    name: "Venise, Italie",
    lat: 45.4408,
    lng: 12.3155,
    photos: [],
  },

  // Espagne
  {
    name: "Madrid, Espagne",
    lat: 40.4168,
    lng: -3.7038,
    photos: [],
  },

  // Portugal
  {
    name: "Porto, Portugal",
    lat: 41.1579,
    lng: -8.6291,
    photos: [
      "/assets/Photos/Portugal/Porto/porto1.png",
      "/assets/Photos/Portugal/Porto/porto2.png",
    ],
  },
  {
    name: "Lisbonne, Portugal",
    lat: 38.7169,
    lng: -9.139,
    photos: [
      "/assets/Photos/Portugal/Lisbonne/lisbonne1.png",
      "/assets/Photos/Portugal/Lisbonne/lisbonne2.png",
    ],
  },
  {
    name: "Maia, Portugal",
    lat: 41.2357,
    lng: -8.619,
    photos: [],
  },
  {
    name: "Figueira da Foz, Portugal",
    lat: 40.15,
    lng: -8.8667,
    photos: [],
  },
  {
    name: "Saint-Jacques-de-Compostelle, Espagne",
    lat: 42.8805,
    lng: -8.5457,
    photos: [],
  },

  // République Tchèque
  {
    name: "Prague, République Tchèque",
    lat: 50.0755,
    lng: 14.4378,
    photos: [
      "/assets/Photos/trip2025/photo22.JPG",
      "/assets/Photos/trip2025/photo23.JPG",
    ],
  },

  // Pays-Bas
  {
    name: "Rotterdam, Pays-Bas",
    lat: 51.9244,
    lng: 4.4777,
    photos: [
      "/assets/Photos/Pays-Bas/Rotterdam/rotterdam1.png",
      "/assets/Photos/Pays-Bas/Rotterdam/rotterdam2.png",
      "/assets/Photos/Pays-Bas/Rotterdam/rotterdam3.png",
    ],
  },
  {
    name: "Amsterdam, Pays-Bas",
    lat: 52.3676,
    lng: 4.9041,
    photos: [
      "/assets/Photos/Pays-Bas/Amsterdam/amsterdam1.png",
      "/assets/Photos/Pays-Bas/Amsterdam/amsterdam2.png",
      "/assets/Photos/Pays-Bas/Amsterdam/amsterdam3.png",
    ],
  },

  // Belgique
  {
    name: "Bruges, Belgique",
    lat: 51.2093,
    lng: 3.2247,
    photos: [
      "/assets/Photos/Belgique/Bruges/bruges1.png",
      "/assets/Photos/Belgique/Bruges/bruges2.png",
      "/assets/Photos/Belgique/Bruges/bruges3.png",
    ],
  },
  {
    name: "Gand, Belgique",
    lat: 51.0543,
    lng: 3.7174,
    photos: [
      "/assets/Photos/Belgique/Gand/ghent1.png",
      "/assets/Photos/Belgique/Gand/ghent2.png",
      "/assets/Photos/Belgique/Gand/ghent3.png",
    ],
  },
  {
    name: "Charleroi, Belgique",
    lat: 50.4114,
    lng: 4.4445,
    photos: [
      "/assets/Photos/Belgique/Charleroi/charleroi1.png",
      "/assets/Photos/Belgique/Charleroi/charleroi2.png",
    ],
  },
  {
    name: "Bruxelles, Belgique",
    lat: 50.8503,
    lng: 4.3517,
    photos: [
      "/assets/Photos/Belgique/Bruxelles/bruxelles1.png",
      "/assets/Photos/Belgique/Bruxelles/bruxelles2.png",
    ],
  },
  {
    name: "Anvers, Belgique",
    lat: 51.2194,
    lng: 4.4025,
    photos: ["/assets/Photos/Belgique/Anvers/anvers1.png"],
  },

  // Corée du Sud
  {
    name: "Séoul, Corée du Sud",
    lat: 37.5665,
    lng: 126.978,
    photos: [
      "/assets/Photos/photo12.png",
      "/assets/Photos/photo11.png",
      "/assets/Photos/photo15.png",
    ],
  },
  {
    name: "Busan, Corée du Sud",
    lat: 35.1796,
    lng: 129.0756,
    photos: ["/assets/Photos/photo13.png", "/assets/Photos/photo14.png"],
  },
];

// --- Initialisation Leaflet ---
const map = L.map("travel-map", { minZoom: 2 }).setView([20, 0], 2);
L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 20,
  subdomains: "abcd",
  attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
}).addTo(map);

// --- Popup HTML ---
function popupHTML(place) {
  const imgs = place.photos
    .map(
      (src) =>
        `<a class="thumb" href="${src}" target="_blank"><img src="${src}"/></a>`,
    )
    .join("");
  return `<div class="popup"><h3>${place.name}</h3><div class="coords">${place.lat.toFixed(4)}, ${place.lng.toFixed(4)}</div><div class="gallery">${imgs}</div></div>`;
}

function redPinIcon() {
  return L.divIcon({
    className: "pin-red",
    iconSize: [16, 16],
    iconAnchor: [8, 16],
  });
}

const markers = PLACES.map((p) =>
  L.marker([p.lat, p.lng], { icon: redPinIcon(), title: p.name })
    .addTo(map)
    .bindPopup(popupHTML(p)),
);

const group = L.featureGroup(markers);
map.fitBounds(group.getBounds().pad(0.25));
