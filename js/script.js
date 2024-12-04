// global function for usage outside of current year
const today = new Date();

// function to get the current year
function getCurrentYear() {
    return today.getFullYear()
}

// function to set current year on footer and where needed
function setCurrentYear() {
    let currentYears = document.querySelectorAll(".current-year");
    
    for(let year of currentYears) {
        year.textContent = getCurrentYear();
    }
}
setCurrentYear();



// function to get the current page - currentpage is saved as public variable
function getCurrentPage() {
    let currentPath = location.pathname.split("/");
    let currentPage = currentPath[currentPath.length-1];
    currentPage = currentPage.split(".")[0];
    return currentPage;
}
// global current page variable
let currentPage = getCurrentPage();