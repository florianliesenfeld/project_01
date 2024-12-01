let map;

function createMarker(overview) {
    if(overview) {
        for(let entry in locations) {
            L.marker([locations[entry].geoLoc.lat, locations[entry].geoLoc.lon]).addTo(map);
        }
    } else {
        for(let entry in locations[locationId].places) {
            L.marker([locations[locationId].places[entry].lat, locations[locationId].places[entry].lon]).addTo(map);
        }
    }
}

function createMap(lat,lon,zoom) {
    map = L.map('map').setView([lat, lon], zoom);
    // Style URL format in XYZ PNG format; see our documentation for more options
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        minZoom: 2,
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>', 
    }).addTo(map);
}

function getCurrentPage() {
    // let currentPage = location.pathname.split("/")[-1];
    let currentPath = location.pathname.split("/");
    let currentPage = currentPath[currentPath.length-1];
    currentPage = currentPage.split(".")[0];

    switch (currentPage) {
        case "index":
            createMap(32,15,3);
            createMarker(true);
            break;
        case "detail":
            createMap(locations[locationId].geoLoc.lat,locations[locationId].geoLoc.lon,12);
            createMarker(false);
            break;
        case "suggestlocation":
            createMap(32,15,3);
            break;
        case "about":
            createMap(32,15,3);
            break;
        default:
            break;
    }
}

getCurrentPage();



