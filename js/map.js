// create maps and markers

let map;

// let boxIcon2 = L.icon({
//     iconUrl: 'images/marker/atb_marker_purple_05.png',
//     iconRetinaUrl: 'images/marker/atb_marker_purple_05.png',
//     iconSize:     [128, 128], // size of the icon
//     iconAnchor:   [64, 64], // point of the icon which will correspond to marker's location
//     popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
// });

// let boxIcon = L.icon({
//     iconUrl: 'images/marker/atb_marker_dark_05.png',
//     iconRetinaUrl: 'images/marker/atb_marker_dark_05.png',
//     iconSize:     [128, 128], // size of the icon
//     iconAnchor:   [64, 64], // point of the icon which will correspond to marker's location
//     popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
// });

let boxIcon2 = L.icon({
    iconUrl: 'images/marker/atb_marker_purple_05.png',
    iconRetinaUrl: 'images/marker/atb_marker_purple_05.png',
    iconSize:     [64, 64], // size of the icon
    iconAnchor:   [32, 32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

let boxIcon = L.icon({
    iconUrl: 'images/marker/atb_marker_dark_05.png',
    iconRetinaUrl: 'images/marker/atb_marker_dark_05.png',
    iconSize:     [64, 64], // size of the icon
    iconAnchor:   [32, 32], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});


// function for creating a based on the parameters lat,lon,zoom and mapUrl
function createMap(lat,lon,zoom, mapUrl) {
    map = L.map('map').setView([lat, lon], zoom);
    L.tileLayer(`https://tiles.stadiamaps.com/tiles/${mapUrl}/{z}/{x}/{y}{r}.png`, {
        maxZoom: 20,
        minZoom: 2,
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>', 
    }).addTo(map);
}

// function for creating Markers and adding it to the map, Marker Positions are saved in the locations Array
function createMarker(overview) {
    if(overview) {
        for(let entry in locations) {
            L.marker([locations[entry].geoLoc.lat, locations[entry].geoLoc.lon], {icon: boxIcon}).on("click", function() {
                window.location.href=`detail.html?id=${locations[entry].id}`;
            }).on("mouseover", function() {
                this.setIcon(boxIcon2);
            }).on("mouseout", function() {
                this.setIcon(boxIcon);
            }).addTo(map);
        }
    } else {
        for(let entry in locations[locationId].places) {
            L.marker([locations[locationId].places[entry].lat, locations[locationId].places[entry].lon], {icon: boxIcon}).on("mouseover", function() {
                this.setIcon(boxIcon2);
            }).on("mouseout", function() {
                this.setIcon(boxIcon);
            }).addTo(map);
        }
    }
}

// function to determine the current page and calling the creatiion of the corresponding maps and markers
function getCurrentMap() {
    switch (currentPage) {
        case "index":
            createMap(32, 15, 3, "stamen_toner_background");
            createMarker(true);
            break;
        case "detail":
            createMap(locations[locationId].geoLoc.lat,locations[locationId].geoLoc.lon,12,"stamen_toner_background" );
            createMarker(false);
            break;
        case "suggestlocation":
            createMap(32, 15, 3, "stamen_toner");
            break;
        case "about":
            createMap(53.54882956200188, 9.98713835804978, 12, "stamen_toner_background");
            break;
        default:
            break;
    }
}

getCurrentMap();