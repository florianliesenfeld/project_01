let ulLocCarousel = document.querySelector(".list")

function createCardsList() {
    for (let entry in locations) {
        ulLocCarousel.innerHTML+=   `<li><a href="detail.html?id=${locations[entry].id}">
                                    <article class="card">
                                    <img class="card__img" src="images/${locations[entry].thumbnail.thumb}" alt="${locations[entry].thumbnail.alt}">
                                    <h3 class="card__heading">${locations[entry].location}</h3>
                                    <time datetime="${locations[entry].period.start}">${locations[entry].period.start}</time>
                                    </article></a></li>`;
    }
}
createCardsList();