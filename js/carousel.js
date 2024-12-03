// create cards based of the location data in location.js and display them inside a carousel 
// and populate the locations in the overview in the
let ulLocCarousel = document.querySelector(".carousel")

// function that creates the html code of the cards for each location based on the data in location.js
function createCards() {
    for (let entry in locations) {
        ulLocCarousel.innerHTML+=   `<div class="carousel-cell"><a href="detail.html?id=${locations[entry].id}">
                                    <article class="card">
                                    <img class="card__img" src="images/${locations[entry].thumbnail.thumb}" alt="${locations[entry].thumbnail.alt}">
                                    <h3 class="card__heading">${locations[entry].location}</h3>
                                    <time datetime="${locations[entry].period.start}">${locations[entry].period.start}</time>
                                    </article></a></div>`;
    }
}
createCards();

// populate image gallery on detail page
function populateGallery() {
    let result = "";
    for(let image in locations[locationId].images) {
        result+= `<div class="carousel-cell"><img src="images/${locations[locationId].images[image]}" alt="images/${locations[locationId].altImages[image]}"></div>`;
    }
    document.querySelector(".carousel").innerHTML = result;
}

if(currentPage==="detail") {
    populateGallery();
} else if(currentPage==="index") {
    createCards();
}
