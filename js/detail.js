// weather API key in seperated file / need to add you own key get it at https://openweathermap.org/
// put key in row below and uncomment
// const weatherApiKey = "";

// global variable of locatonId used in multiple scripts
const searchParams = new URLSearchParams(location.search);
const locationId = searchParams.get("id");

// function to set the navigation in the bootom of the page to previous and next location
function navigateLocations() {
    

    const locationPrevious = document.querySelector("#location__previous");
    const locationNext = document.querySelector("#location__next");

    // get idTogoTo by adding either 1 or #ofLocations-1 and taking the modulo to stay within Array boundaries
    let idPrevious = (Number(locationId)+(locations.length-1)) % (locations.length);
    let idNext = (Number(locationId)+1) % (locations.length);

    // set href and the name of previous Location 
    locationPrevious.setAttribute("href", `detail.html?id=${locations[idPrevious].id}`);
    locationPrevious.innerHTML = `&#10229; ${locations[idPrevious].location}`;
    
    // set href and the name of next Location
    locationNext.innerHTML = `${locations[idNext].location} &#10230;`;
    locationNext.setAttribute("href", `detail.html?id=${locations[idNext].id}`);
}

// function to populate detail page with information from the locations.js file
function populate() {
    // change document title to current location
    document.title = `another travel blog | ${locations[locationId].location}`;

    document.querySelector("#heading__main").textContent = locations[locationId].location;
    document.querySelector("#heading__date").textContent = `${locations[locationId].period.start} to ${locations[locationId].period.end}`;
    document.querySelector("#text__body").textContent = locations[locationId].textBody;
    document.querySelector("#text-credits").innerHTML = locations[locationId].credits;
    navigateLocations();
}

// function to draw the weather, pollution and location data
function drawData(data, type) {
    switch (type) {
        case "weather":
            document.querySelector("#weather__icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            document.querySelector("#weather__temp").textContent = `${Math.round(data.main.temp)} °C`;
            document.querySelector("#weather__description").textContent = data.weather[0].description;  
            break;
        case "pollution":
            document.querySelector("#pollution__aqi").textContent = `${data.list[0].main.aqi}`;
            document.querySelector("#pollution__component").textContent = `${data.list[0].components.pm2_5}`;
            break;
        case "geoCoding":
            const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
            const regionName = regionNamesInEnglish.of(data[0].country);

            document.querySelector("#heading__sub").textContent = regionName;
            break;
        default:
            break;
    }    
}

populate();
getData(getUrl("geoCoding", "null"), "geoCoding");
getData(getUrl("weather", "null"), "weather");
getData(getUrl("pollution", "null"), "pollution");