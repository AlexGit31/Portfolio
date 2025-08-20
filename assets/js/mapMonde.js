// --- Config des lieux visités ---
const PLACES = [
  // France
  {
    name: "Paris, France",
    lat: 48.8566,
    lng: 2.3522,
    photos: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34"],
  },
  {
    name: "Bayonne, France",
    lat: 43.4929,
    lng: -1.4748,
    photos: ["https://images.unsplash.com/photo-1604328698692-49fa29a26497"],
  },
  {
    name: "Anglet, France",
    lat: 43.48,
    lng: -1.521,
    photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e"],
  },
  {
    name: "Biarritz, France",
    lat: 43.4832,
    lng: -1.5586,
    photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e"],
  },
  {
    name: "Bordeaux, France",
    lat: 44.8378,
    lng: -0.5792,
    photos: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34"],
  },
  {
    name: "Toulouse, France",
    lat: 43.6047,
    lng: 1.4442,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Lille, France",
    lat: 50.6292,
    lng: 3.0573,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Menton, France",
    lat: 43.7745,
    lng: 7.4975,
    photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e"],
  },
  {
    name: "Nice, France",
    lat: 43.7102,
    lng: 7.262,
    photos: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34"],
  },
  {
    name: "Versailles, France",
    lat: 48.8049,
    lng: 2.1204,
    photos: ["https://images.unsplash.com/photo-1511739001486-6bfe10ce785f"],
  },

  // Angleterre
  {
    name: "Londres, Angleterre",
    lat: 51.5074,
    lng: -0.1278,
    photos: ["https://images.unsplash.com/photo-1463100099107-aa0980c362e6"],
  },
  {
    name: "Brighton, Angleterre",
    lat: 50.8225,
    lng: -0.1372,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  // Monaco
  {
    name: "Monaco",
    lat: 43.7384,
    lng: 7.4246,
    photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e"],
  },

  // Italie
  {
    name: "Florence, Italie",
    lat: 43.7699,
    lng: 11.2556,
    photos: ["https://images.unsplash.com/photo-1543340713-8df79677f22a"],
  },
  {
    name: "Murano, Italie",
    lat: 45.4586,
    lng: 12.3547,
    photos: ["https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"],
  },
  {
    name: "Burano, Italie",
    lat: 45.4857,
    lng: 12.416,
    photos: ["https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"],
  },
  {
    name: "Venise, Italie",
    lat: 45.4408,
    lng: 12.3155,
    photos: ["https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"],
  },

  // Espagne
  {
    name: "Madrid, Espagne",
    lat: 40.4168,
    lng: -3.7038,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },

  // Portugal
  {
    name: "Porto, Portugal",
    lat: 41.1579,
    lng: -8.6291,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Lisbonne, Portugal",
    lat: 38.7169,
    lng: -9.139,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Maia, Portugal",
    lat: 41.2357,
    lng: -8.619,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Figueira da Foz, Portugal",
    lat: 40.15,
    lng: -8.8667,
    photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e"],
  },
  {
    name: "Saint-Jacques-de-Compostelle, Espagne",
    lat: 42.8805,
    lng: -8.5457,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },

  // République Tchèque
  {
    name: "Prague, République Tchèque",
    lat: 50.0755,
    lng: 14.4378,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },

  // Pays-Bas
  {
    name: "Rotterdam, Pays-Bas",
    lat: 51.9244,
    lng: 4.4777,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Amsterdam, Pays-Bas",
    lat: 52.3676,
    lng: 4.9041,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },

  // Belgique
  {
    name: "Bruges, Belgique",
    lat: 51.2093,
    lng: 3.2247,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Gand, Belgique",
    lat: 51.0543,
    lng: 3.7174,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Charleroi, Belgique",
    lat: 50.4114,
    lng: 4.4445,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Bruxelles, Belgique",
    lat: 50.8503,
    lng: 4.3517,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },
  {
    name: "Anvers, Belgique",
    lat: 51.2194,
    lng: 4.4025,
    photos: ["https://images.unsplash.com/photo-1505761671935-60b3a7427bad"],
  },

  // Corée du Sud
  {
    name: "Séoul, Corée du Sud",
    lat: 37.5665,
    lng: 126.978,
    photos: ["https://images.unsplash.com/photo-1549692520-acc6669e2f0c"],
  },
  {
    name: "Busan, Corée du Sud",
    lat: 35.1796,
    lng: 129.0756,
    photos: ["https://images.unsplash.com/photo-1549692520-acc6669e2f0c"],
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
