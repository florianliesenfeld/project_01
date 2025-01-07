// async function to fetch the data from the pixabay api
async function getImages(url) {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        if(data.hits.length > 0) {
            let i = 0;
            for(entry in data.hits) {
                if(i<15) {
                    let image = data.hits[entry];
                    suggestedImages.push([image.webformatURL, image.pageURL, image.hasOwnProperty("user") ? image.user : image.user_id]);
                    i++;
                }
            }
        }
        if(locations[locationId].suggested) {
            await populateGallerySuggestion();
        }
    } catch(error) {
        console.error(error.message);
    }
}

getImages(getUrl("locationImages",""));