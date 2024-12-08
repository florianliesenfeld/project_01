let ulLocCarousel = document.querySelector(".list")

function makeCardList(entry) {
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

function createCardsList() {
    for (let entry in locations) {
        ulLocCarousel.appendChild(makeCardList(entry));
        // ulLocCarousel.innerHTML+=   `<li><a href="detail.html?id=${locations[entry].id}">
        //                             <article class="card">
        //                             <img class="card__img" src="images/${locations[entry].thumbnail.thumb}" alt="${locations[entry].thumbnail.alt}">
        //                             <h3 class="card__heading">${locations[entry].location}</h3>
        //                             <time datetime="${locations[entry].period.start}">${locations[entry].period.start}</time>
        //                             </article></a></li>`;
    }
}
createCardsList();