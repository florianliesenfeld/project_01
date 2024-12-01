// weather API key in seperated file / need to add you own key get it at https://openweathermap.org/
// const weatherApiKey = "";

const searchParams = new URLSearchParams(location.search);
const locationId = searchParams.get("id");
const headingMain = document.querySelector("#heading__main");
const headingSub = document.querySelector("#heading__sub");
const headingDate = document.querySelector("#heading__date");
const textBodyMain = document.querySelector("#text__body");
const imageGallery = document.querySelector(".gallery");
const textCredits = document.querySelector("#text-credits");

function populate() {
    // populate detail page with information from locations.js file 
    headingMain.textContent = locations[locationId].location;
    headingDate.textContent = `${locations[locationId].period.start} to ${locations[locationId].period.end}`;
    imageGallery.firstElementChild.setAttribute("src",`images/${locations[locationId].images[0]}`);
    imageGallery.firstElementChild.setAttribute("alt",`images/${locations[locationId].altImages[0]}`);
    textBodyMain.textContent = locations[locationId].textBody;
    textCredits.innerHTML = locations[locationId].credits;
}

function drawData(data, type) {
    switch (type) {
        case "weather":
            const weatherIcon = document.querySelector("#weather__icon")
            const weatherTemp = document.querySelector("#weather__temp");
            const weatherDescription = document.querySelector("#weather__description");

            weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            weatherTemp.textContent = `${Math.round(data.main.temp)} °C`;
            weatherDescription.textContent = data.weather[0].description;  
            break;
        case "pollution":
            const pollutionAqi = document.querySelector("#pollution__aqi");
            const pollutionComponent = document.querySelector("#pollution__component");

            pollutionAqi.textContent = `${data.list[0].main.aqi}`;
            pollutionComponent.textContent = `${data.list[0].components.pm2_5}`;
        case "geoCoding":
            const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
            const regionName = regionNamesInEnglish.of(data[0].country);

            console.log(data[0].country);
            headingSub.textContent = regionName;
            break;
        default:
            break;
    }    
}

async function getData(type) {
    let url = "";
    switch (type) {
        case "weather":
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
            url = `${urlWeather}&q=${locations[locationId].location}&appid=${weatherApiKey}`;
            break;
        case "pollution":
            const urlPollution = `http://api.openweathermap.org/data/2.5/air_pollution`;
            url = `${urlPollution}?lat=${locations[locationId].geoLoc.lat}&lon=${locations[locationId].geoLoc.lon}&appid=${weatherApiKey}`;
            break;
        case "geoCoding":
            const urlGeoCoding = `http://api.openweathermap.org/geo/1.0/direct?limit=1`;
            url = `${urlGeoCoding}&q=${locations[locationId].location}&appid=${weatherApiKey}`;
            break;
        default:
            break;
    }
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        // console.log(weatherData);
        drawData(data, type);
    } catch(error) {
        console.error(error.message);
    }
}

populate();
getData("geoCoding");
getData("weather");
getData("pollution");