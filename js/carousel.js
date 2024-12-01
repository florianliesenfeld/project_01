// create cards based of the location data in location.js and display them
// inside a carousel? 

let locCarousel = document.querySelector(".carousel");
let ulLocCarousel = document.querySelector(".carousel ul")

for (let entry in locations) {
    ulLocCarousel.innerHTML+=   `<li><a href="detail.html?id=${locations[entry].id}">
                                <article class="card">
                                <img src="images/${locations[entry].thumbnail.thumb}" alt="${locations[entry].thumbnail.alt}">
                                <h3>${locations[entry].location}</h3>
                                <time datetime="${locations[entry].period.start}">${locations[entry].period.start}</time>
                                </article></a></li>`;
}