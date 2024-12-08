// function for getting the url for the API call of pixabay
function getUrlImages(type, locationName) {
    let url = "";
    switch (type) {
        case "locationImages":
            const urlImages = `https://pixabay.com/api/`;
            return url = `${urlImages}?q=${locations[locationId].location}&type=photo&category=travel&key=${imagesApiKey}`;
        default:
            break;
    }
}

// async function to fetch the data from the pixabay api
async function getImages(url) {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        for(entry in data.hits) {
            suggestedImages.push([data.hits[entry].webformatURL,data.hits[entry].pageURL]);
        }
        if(locations[locationId].suggested) {
            populateGallerySuggestion();
        }
        return data;
    } catch(error) {
        console.error(error.message);
    }
}

getImages(getUrlImages("locationImages", "Hamburg"));