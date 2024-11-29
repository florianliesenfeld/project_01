// import weatherApiKey from "keys.js";
// import { locations } from "./locations.js";

// Get Current Year
let currentYears = document.querySelectorAll(".current-year");
const today = new Date();

for(let year of currentYears) {
    year.textContent = today.getFullYear();
}

// Maps
// Initialize a map centered at (53, 12) at zoom level 5
// let map = L.map('map').setView([53.548828411567214, 9.987164453216884], 3);
let map = L.map('map').setView([32, 15], 3);


// Style URL format in XYZ PNG format; see our documentation for more options
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>', 
}).addTo(map);

for(let entry in locations) {
    L.marker([locations[entry].lat, locations[entry].lon]).addTo(map);
}