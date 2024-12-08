// function for getting the url for the API call of openweatherAPI
function getUrl(type, locationName) {
    let url = "";
    switch (type) {
        case "weatherByCoords":
            const urlWeatherCoords = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
            return url = `${urlWeatherCoords}&lat=${locations[locationId].geoLoc.lat}&lon=${locations[locationId].geoLoc.lon}&appid=${weatherApiKey}`;
        case "weatherByName":
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
            return url = `${urlWeather}&q=${locations[locationId].location}&appid=${weatherApiKey}`;
        case "pollution":
            const urlPollution = `https://api.openweathermap.org/data/2.5/air_pollution`;
            return url = `${urlPollution}?lat=${locations[locationId].geoLoc.lat}&lon=${locations[locationId].geoLoc.lon}&appid=${weatherApiKey}`;
        case "geoCoding":
            const urlGeoCoding = `https://api.openweathermap.org/geo/1.0/direct?limit=1`;
            return url = `${urlGeoCoding}&q=${locations[locationId].location}&appid=${weatherApiKey}`;
        case "geoCodingGeneral":
            const urlGeoCodingGeneral = `https://api.openweathermap.org/geo/1.0/direct?limit=1`;
            return url = `${urlGeoCodingGeneral}&q=${locationName}&appid=${weatherApiKey}`;
        case "geoCodingReverse":
            const urlGeoCodingReverse = `https://api.openweathermap.org/geo/1.0/reverse?limit=1`;
            return url = `${urlGeoCodingReverse}&lat=${locationName[0]}&lon=${locationName[1]}&appid=${weatherApiKey}`;
        default:
            break;
    }
}

// async function to fetch the data from the openweathermap api
async function getData(url, type) {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();

        if(currentPage === "detail") {
            drawData(data,type);
        } else {
            return data;
        }
        
    } catch(error) {
        console.error(error.message);
    }
}

// async function to get the location entered in the suggestion form
async function getCoordinates(type, location) {
    if(elSuggestionLocation.value !== "" ) {
        try {
            let data = await getData(getUrl(type, location), "");
            // if(!data.ok) {
            //     throw new Error(`Response status: ${data.status}`)
            // }
            currentSuggestionCoord = [data[0].lat,data[0].lon];
            map.setView([data[0].lat,data[0].lon], 10);
            createSuggestionMarker([data[0].lat, data[0].lon]);
        } catch (error) {
            console.error(error.message);
        }
        
     } else {
        console.log("no location input");
     } 
}

// async function to get the location name from placing marker on the map
async function getLocation(type, location) {
    try {
        let data = await getData(getUrl(type, location), "");
        if(data.length > 0) {
            elSuggestionLocation.value = data[0].name;
        } else {
            showError("please choose an existing place, sorry for the limitations!");
        }
    } catch (error) {
        console.error(error.message);
    }
}

// async function to validate the location entered in the suggestion form
async function validateLocation(type, location) {
    if(elSuggestionLocation.value !== "" ) {
        try {
            let data = await getData(getUrl(type, location), "");
            if(data.length > 0) {
                locationsSerialized.addLocation(createLocationObject(data));
            } else {
                showError("please enter a valid destination");
            }
        } catch (error) {
            console.error(error.message);
        }
     } else {
        console.log("no location input");
     } 
}