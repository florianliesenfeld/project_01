const url = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
// weather API key in seperated file / need to add you own key get it at https://openweathermap.org/
// const weatherApiKey = "";
// const location = "Abuja"
const searchParams = new URLSearchParams(location.search);
const locationId = searchParams.get("id");
const headingMain = document.querySelector("#heading__main");
const headingSub = document.querySelector("#heading__sub");
const textBodyMain = document.querySelector("#text__body");
const imageGallery = document.querySelector(".gallery");

function setup() {
    headingMain.textContent = locations[locationId].location;
    headingSub.textContent = locations[locationId].dateStart;
    // imageGallery.getChild
    textBodyMain.textContent = locations[locationId].textBody;
}

setup();
// async function getWeather(location) {
//     try {
//         const response = await fetch(`${url}&q=${location}&appid=${weatherApiKey}`);
//         if(!response.ok) {
//             throw new Error(`Response status: ${response.status}`)
//         }
//         const json = await response.json();
//         console.log(json);
//     } catch(error) {
//         console.error(error.message);
//     }
// }
// getWeather(location)