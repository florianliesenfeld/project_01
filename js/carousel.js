// create cards based of the location data in location.js and display them inside a carousel 
// and populate the locations in the overview in the
let ulLocCarousel = document.querySelector(".carousel");

// create ne flickity carousel
var flkty = new Flickity( ulLocCarousel, {
  wrapAround: true
});

// function to create card
function makeCard(entry) {
    let card = document.createElement('div');
    card.className = 'carousel-cell';

    let cardAnchor = document.createElement('a');
    cardAnchor.href = `detail.html?id=${locations[entry].id}`;

    let cardArticle = document.createElement('article');
    cardArticle.className = 'card';

    let cardImg = document.createElement('img');
    cardImg.className = 'card__img';
    cardImg.src = `images/${locations[entry].thumbnail.thumb}`;
    cardImg.alt = `${locations[entry].thumbnail.alt}`;

    let cardHeading = document.createElement('h3');
    cardHeading.className = 'card__heading';
    cardHeading.textContent = `${locations[entry].location}`;

    let cardTime = document.createElement('time');
    cardTime.dateTime = `${locations[entry].period.start}`;
    cardTime.textContent = `${locations[entry].period.start}`;

    cardArticle.appendChild(cardImg);
    cardArticle.appendChild(cardHeading);
    cardArticle.appendChild(cardTime);
    cardAnchor.appendChild(cardArticle);
    card.appendChild(cardAnchor);
    return card;
}

// function that creates the html code of the cards for each location based on the data in location.js
function createCards() {
    let elementsToAdd = [];
    for (let entry in locations) {
        elementsToAdd.push(makeCard(entry));
    }
    flkty.append(elementsToAdd);
}

// function to create an cell image of offline images to display inside carousel
function makeCellImg(image) {
    let cell = document.createElement('div');
    cell.className = 'carousel-cell';
    let cellImg = document.createElement('img');
    cellImg.className = 'carousel__img';
    cellImg.src = `images/${locations[locationId].images[image]}`;
    cellImg.alt = `${locations[locationId].altImages[image]}`;
    cell.appendChild(cellImg);
    return cell;
}

// populate image gallery on detail page
function populateGallery() {
    let elementsToAdd = [];
    for(let image in locations[locationId].images) {
        elementsToAdd.push(makeCellImg(image));
    }
    flkty.append(elementsToAdd);
}

// function to create an cell image of online images to display inside carousel
function makeCellImgSuggestion(image) {
    let cell = document.createElement('div');
    cell.className = 'carousel-cell';
    let cellImg = document.createElement('img');
    cellImg.className = 'carousel__img carousel__img--suggested';
    if(image >= suggestedImages.length) {
        cellImg.src = "images/atb_placeholder.jpg";
    } else {
        cellImg.src = `${suggestedImages[image][0]}`;
    }
    cell.appendChild(cellImg);

    let cellImgOverlay = document.createElement('div');
    cellImgOverlay.className= 'noise';
    cell.appendChild(cellImgOverlay);
    return cell;
}

// function to populate online images into carousel
async function populateGallerySuggestion() {
    let imageLength = suggestedImages.length
    let elementsToAdd = [];
    imageLength < 5 ? imageLength=5 : imageLength;
    for(let i=0;i<imageLength;i++) {
        elementsToAdd.push(makeCellImgSuggestion(i));
    }
    flkty.append(elementsToAdd);
}

// inital functions on load depending on page
if(currentPage==="detail") {
    if(!locations[locationId].suggested) {
        populateGallery();
    }
} else if(currentPage==="index") {
    createCards();
}
