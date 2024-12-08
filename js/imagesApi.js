// function for getting the url for the API call of pixabay
function getUrl(type, locationName) {
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
async function getData(url) {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error(error.message);
    }
}

getData(getUrl("locationImages", "Hamburg"));