const imageGallery = document.querySelector(".main-carousel");

function populateGallery() {
    let result = "";
    for(let image in locations[locationId].images) {
        result+= `<div class="carousel-cell"><img class="carousel-image" src="images/${locations[locationId].images[image]}" alt="images/${locations[locationId].altImages[image]}"></div>`;
    }
    imageGallery.innerHTML = result;
}

populateGallery();