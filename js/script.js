// Get Current Year and display on the page
let currentYears = document.querySelectorAll(".current-year");
const today = new Date();

for(let year of currentYears) {
    year.textContent = today.getFullYear();
}

function getCurrentPage() {
    let currentPath = location.pathname.split("/");
    let currentPage = currentPath[currentPath.length-1];
    currentPage = currentPage.split(".")[0];
    return currentPage;
}
let currentPage = getCurrentPage();