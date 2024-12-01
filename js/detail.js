const url = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
// weather API key in seperated file / need to add you own key get it at https://openweathermap.org/
// const weatherApiKey = "";
// const location = "Abuja"
const searchParams = new URLSearchParams(location.search);
const locationId = searchParams.get("id");
const headingMain = document.querySelector("#heading__main");
const headingSub = document.querySelector("#heading__sub");
const headingDate = document.querySelector("#heading__date");
const textBodyMain = document.querySelector("#text__body");
const imageGallery = document.querySelector(".gallery");
const textCredits = document.querySelector("#text-credits");

// weather
const weatherIcon = document.querySelector("#weather__icon")
const weatherTemp = document.querySelector("#weather__temp");
const weatherDescription = document.querySelector("#weather__description");


function populate() {
    // populate detail page with information from locations.js file 
    headingMain.textContent = locations[locationId].location;
    headingDate.textContent = `${locations[locationId].period.start} to ${locations[locationId].period.end}`;
    imageGallery.firstElementChild.setAttribute("src",`images/${locations[locationId].images[0]}`);
    imageGallery.firstElementChild.setAttribute("alt",`images/${locations[locationId].altImages[0]}`);
    textBodyMain.textContent = locations[locationId].textBody;
    textCredits.innerHTML = locations[locationId].credits;
}

function drawData(data) {
    // get region name from weahter API to display in the head of the page
    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
    const regionName = regionNamesInEnglish.of(data.sys.country);
    headingSub.textContent = regionName;

    // draw weather data
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherTemp.textContent = `${Math.round(data.main.temp)} °C`;
    weatherDescription.textContent = data.weather[0].description;
    
    console.log(data.weather[0].description);
}

populate();

async function getWeather(location) {
    try {
        const response = await fetch(`${url}&q=${location}&appid=${weatherApiKey}`);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const weatherData = await response.json();
        // console.log(weatherData);
        drawData(weatherData);
    } catch(error) {
        console.error(error.message);
    }
}
getWeather(locations[locationId].location)