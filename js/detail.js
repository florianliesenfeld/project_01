const url = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const key = "f9eba5a9053e45b70952a2b567e86510";

const location = "Abuja"

async function getWeather(location) {
    try {
        const response = await fetch(`${url}&q=${location}&appid=${key}`);
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