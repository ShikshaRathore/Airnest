// Create map centered on New Jersey
var map = L.map("map", {
  zoomControl: true,
  attributionControl: true,
}).setView([23.1995, 77.4516], 9);

// CARTO Voyager base map - Google-like appearance
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  {
    subdomains: "abcd",
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/">CARTO</a>',
  }
).addTo(map);

// Labels overlay (adds city and road names more clearly as you zoom in)
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
  {
    subdomains: "abcd",
    maxZoom: 20,
    pane: "overlayPane",
  }
).addTo(map);

// Marker with popup
var marker = L.marker([23.1995, 77.4516]).addTo(map);
// marker
//   .bindPopup(
//     "<b>New Jersey</b><br>Nearby cities & names appear as you zoom in."
//   )
//   .openPopup();

// Add scale control
L.control.scale().addTo(map);
