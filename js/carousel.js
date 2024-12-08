// create cards based of the location data in location.js and display them inside a carousel 
// and populate the locations in the overview in the
let ulLocCarousel = document.querySelector(".carousel");
let suggestedImages = [];

var flkty = new Flickity( ulLocCarousel, {
  // options
  wrapAround: true
//   cellAlign: 'left',
});

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
        // ulLocCarousel.innerHTML+=   `<div class="carousel-cell"><a href="detail.html?id=${locations[entry].id}">
        //                             <article class="card">
        //                             <img class="card__img" src="images/${locations[entry].thumbnail.thumb}" alt="${locations[entry].thumbnail.alt}">
        //                             <h3 class="card__heading">${locations[entry].location}</h3>
        //                             <time datetime="${locations[entry].period.start}">${locations[entry].period.start}</time>
        //                             </article></a></div>`;
    }
    flkty.append(elementsToAdd);
}

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
    // console.log(elementsToAdd);
    flkty.append(elementsToAdd);
    // flkty.reloadCells();
}


function makeCellImgSuggestion(image) {
    let cell = document.createElement('div');
    cell.className = 'carousel-cell';
    let cellImg = document.createElement('img');
    cellImg.className = 'carousel__img carousel__img--suggested';
    cellImg.src = `${suggestedImages[image][0]}`;
    cellImg.alt = `${suggestedImages[image][1]}`;
    cell.appendChild(cellImg);
    
    let cellImgOverlay = document.createElement('div');
    cellImgOverlay.className= 'noise';
    cell.appendChild(cellImgOverlay);
    return cell;
}

function populateGallerySuggestion() {
    // ulLocCarousel.innerHTML = "";
    let elementsToAdd = [];
    for(let image in suggestedImages) {
        elementsToAdd.push(makeCellImgSuggestion(image));

        // flkty.append(suggestedImages[image][0]);
        // ulLocCarousel.innerHTML+= `<div class="carousel-cell"><img class="carousel__img carousel__img--suggested" src="${suggestedImages[image][0]}" alt="${suggestedImages[image][1]}" height="224px"></div>`;
    }
    console.log(elementsToAdd);
    flkty.append(elementsToAdd);

}

if(currentPage==="detail") {
    if(!locations[locationId].suggested) {
        populateGallery();
    }
} else if(currentPage==="index") {
    createCards();
}
