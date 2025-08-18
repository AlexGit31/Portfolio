// --- Config des lieux visités ---
const PLACES = [
  {
    name: "Tokyo, Japon",
    lat: 35.6762,
    lng: 139.6503,
    photos: ["https://images.unsplash.com/photo-1549692520-acc6669e2f0c"],
  },
  {
    name: "Paris, France",
    lat: 48.8566,
    lng: 2.3522,
    photos: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34"],
  },
  {
    name: "New York, USA",
    lat: 40.7128,
    lng: -74.006,
    photos: ["https://images.unsplash.com/photo-1468436139062-f60a71c5c892"],
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
