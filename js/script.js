// Get Current Year and display on the page
let currentYears = document.querySelectorAll(".current-year");
const today = new Date();

for(let year of currentYears) {
    year.textContent = today.getFullYear();
}