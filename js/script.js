// function to get the current year and display on the page
function getCurrentYear() {
    let currentYears = document.querySelectorAll(".current-year");
    const today = new Date();
    
    for(let year of currentYears) {
        year.textContent = today.getFullYear();
    }
}
getCurrentYear();

// function to get the current page - currentpage is saved as public variable
function getCurrentPage() {
    let currentPath = location.pathname.split("/");
    let currentPage = currentPath[currentPath.length-1];
    currentPage = currentPage.split(".")[0];
    return currentPage;
}
let currentPage = getCurrentPage();