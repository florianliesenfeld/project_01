const url = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
// weather API key in seperated file / need to add you own key at https://openweathermap.org/
// const weatherApiKey = "";
const location = "Abuja"

async function getWeather(location) {
    try {
        const response = await fetch(`${url}&q=${location}&appid=${weatherApiKey}`);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        console.log(json);
    } catch(error) {
        console.error(error.message);
    }
}
getWeather(location)