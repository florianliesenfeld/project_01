let locCarousel = document.querySelector(".carousel");
let ulLocCarousel = document.querySelector(".carousel ul")

for (let entry in locations) {
    ulLocCarousel.innerHTML+=   `<li><a href="detail.html?id=${locations[entry].id}">
                                <article class="card">
                                <img src="images/${locations[entry].thumbnail}" alt="">
                                <h3>${locations[entry].location}</h3>
                                <time datetime="${locations[entry].dateStart}">${locations[entry].dateStart}</time>
                                </article></a></li>`;
}