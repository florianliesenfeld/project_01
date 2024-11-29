// Get Current Year
let currentYears = document.querySelectorAll(".current-year");
const today = new Date();

for(let year of currentYears) {
    year.textContent = today.getFullYear();
}

const locations = [
    {
        id: 1,
        location: "Berlin",
        lat: 52.52000587310054,
        lon: 13.404946669381067,
        dateStart: "2084-04-13",
        dateEnd: "2084-04-17",
        thumbnail: "travelBlog_Berlin_01_thumb.jpg",
        imgages: ["travelBlog_Berlin_01.jpg","travelBlog_Berlin_02.jpg","travelBlog_Berlin_03.jpg","travelBlog_Berlin_04.jpg"],
        textBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perferendis dolor numquam similique adipisci odit? Quo ducimus quia alias quisquam omnis? Mollitia quo quia, recusandae deserunt repellat impedit consequatur quae!"
    },
    {
        id: 2,
        location: "Abuja",
        lat: 9.056272572547446,
        lon: 7.4985246666398915,
        dateStart: "2064-12-15",
        dateEnd: "2064-12-16",
        thumbnail: "travelBlog_Abuja_01_thumb.jpg",
        imgages: ["travelBlog_Abuja_01.jpg","travelBlog_Abuja_02.jpg","travelBlog_Abuja_03.jpg","travelBlog_Abuja_04.jpg"],
        textBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perferendis dolor numquam similique adipisci odit? Quo ducimus quia alias quisquam omnis? Mollitia quo quia, recusandae deserunt repellat impedit consequatur quae!"
    },
    {
        id: 3,
        location: "Paris",
        lat: 48.85754657470296,
        lon: 2.3513719627048615,
        dateStart: "2058-06-07",
        dateEnd: "2058-06-07",
        thumbnail: "travelBlog_Paris_01_thumb.jpg",
        imgages: ["travelBlog_Paris_01.jpg","travelBlog_Paris_02.jpg","travelBlog_Paris_03.jpg","travelBlog_Paris_04.jpg"],
        textBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perferendis dolor numquam similique adipisci odit? Quo ducimus quia alias quisquam omnis? Mollitia quo quia, recusandae deserunt repellat impedit consequatur quae!"
    },
    {
        id: 4,
        location: "Damascus",
        lat: 33.513229131401154,
        lon: 36.276832308243854,
        dateStart: "2043-02-23",
        dateEnd: "2043-02-25",
        thumbnail: "travelBlog_Dascasus_01_thumb.jpg",
        imgages: ["travelBlog_Dascasus_01.jpg","travelBlog_Dascasus_02.jpg","travelBlog_Dascasus_03.jpg","travelBlog_Dascasus_04.jpg"],
        textBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perferendis dolor numquam similique adipisci odit? Quo ducimus quia alias quisquam omnis? Mollitia quo quia, recusandae deserunt repellat impedit consequatur quae!"
    }
]

// Maps
// Initialize a map centered at (53, 12) at zoom level 5
// let map = L.map('map').setView([53.548828411567214, 9.987164453216884], 3);
let map = L.map('map').setView([32, 15], 3);


// Style URL format in XYZ PNG format; see our documentation for more options
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>', 
}).addTo(map);

for(entry in locations) {
    L.marker([locations[entry].lat, locations[entry].lon]).addTo(map);
}