// import weatherApiKey from "keys.js";
// import { locations } from "./locations.js";

// Get Current Year
let currentYears = document.querySelectorAll(".current-year");
const today = new Date();

for(let year of currentYears) {
    year.textContent = today.getFullYear();
}