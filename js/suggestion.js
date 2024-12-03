// get form data about travel suggestion

let fSuggestion = document.querySelector("#suggestion");
let elBtSuggestion = document.querySelector("#suggestion__send");
let elSuggestionLocation = document.querySelector("#suggestion__location");
let elSuggestionDate = document.querySelector("#suggestion__date");
let elSuggestionReason = document.querySelector("#suggestion__reason");
let elModal = document.querySelector("#modal");
let elBnModalClose = document.querySelector("#modal__close");

let currentSuggestionLocation;

// function to set the current date
function setCurrentDate() {
    const date = today.toISOString().split("T")[0];
    elSuggestionDate.setAttribute("min", date);
    elSuggestionDate.setAttribute("value", date);
}

// function to show modal with confirmation
function confirmSuggestion(location, date, reason) {
    document.querySelector("#modal h2").textContent = "thanks";
    document.querySelector("#modal p").innerHTML = `for suggesting <span id="modal__location">${location}</span> on the <span id="modal__date">${date}</span> because <span id="modal__reason">${reason}</span>`;
    elModal.showModal();
}

// function to show modal with error
function showError() {
    document.querySelector("#modal h2").textContent = "error";
    document.querySelector("#modal p").innerHTML = "please enter a destination and a reason";
    elModal.showModal();
}

// function to set the viewort center to the current location
function setCurrentLocation() {
    function success(position) {
        map.setView([position.coords.latitude,position.coords.longitude], 10);
    }
  
    function error() {
        console.log("unable to retrieve location");
    }
  
    if (!navigator.geolocation) {
        console.log("no location available");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

// function to create a random end datebased on start date + maximal range
function createRandomDate(startDate, range) {
    const date = new Date(startDate);
    const endDate = date.getDate()+Math.floor(Math.random()*range);
    date.setDate(endDate);
    return date.toISOString().split("T")[0]
}

// function to create the location object of the suggested location
function createLocationObject() {
const locationToAdd = {
    id: locations.length,
    location: elSuggestionLocation.value,
    geoLoc: {lat: 33.513229131401154, lon: 36.276832308243854},
    period: {start: elSuggestionDate.value, end: createRandomDate(elSuggestionDate.value, 7)},
    places: [{lat: 33.511373686074556, lon: 36.30689980504887}],
    thumbnail: {thumb: "atb_logo_13_blackbg.jpg",
                alt: "white glowing cube in front of dark background"},
    images: ["atb_placeholder.jpg",
            "atb_placeholder.jpg",
            "atb_placeholder.jpg",
            "atb_placeholder.jpg",
            "atb_placeholder.jpg",
            "atb_placeholder.jpg"],
    altImages:  ["",
                "",
                "",
                "",
                "",
                ""],
    credits: [`Location ${elSuggestionLocation.value} was suggested by user.<p>Do you want to make a suggestion as well? <a href='suggestlocation.html'>[click here]</a></p>`],
    reason: elSuggestionReason.value,
    textBody: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores a qui exercitationem velit omnis ullam nemo? Corporis modi eum non culpa deserunt, animi tenetur perspiciatis eos unde similique qui sequi accusamus. Dolorem, eligendi molestiae. Aliquam, eum velit accusamus fuga aliquid et ex tenetur quisquam numquam labore soluta, deleniti aut necessitatibus impedit dolorem! Debitis nulla harum dolorem animi? Repellendus architecto sapiente ex deserunt ea quia nobis quos cum. Ducimus aspernatur ab dignissimos soluta alias reiciendis eius enim ipsum earum provident distinctio incidunt, pariatur qui odit voluptate quidem ipsam, error magni vel. Debitis deleniti asperiores quasi harum unde optio, facere eum quaerat.",
    suggested: true
};
// console.log(locationToAdd);
return locationToAdd;
}

// event listener to send form
elBtSuggestion.addEventListener("click", function(e) {
    e.preventDefault();
    let location = elSuggestionLocation.value;
    let date = elSuggestionDate.value;
    let reason = elSuggestionReason.value;
    if(location !== "" && date !== "" && reason !== "") {
        confirmSuggestion(location, date, reason);
        locationsSerialized.addLocation(createLocationObject());
        elSuggestionLocation.value = "";
        elSuggestionDate.value = today.toISOString().split("T")[0];
        elSuggestionReason.value = "";
    } else {
        showError();
    }
});

// event listener to close the modal
elBnModalClose.addEventListener("click", function() {
    elModal.close();
    elSuggestionLocation.focus();
});


// event listener to update map view to location entered in form - triggered when input field looses focus
elSuggestionLocation.addEventListener("focusout", function() {
    currentSuggestionLocation = getCoordinates("geoCodingGeneral", elSuggestionLocation.value);
});

setCurrentDate();
setCurrentLocation();