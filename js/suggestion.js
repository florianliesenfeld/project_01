// get form data about travel suggestion

let fSuggestion = document.querySelector("#suggestion");
let elBtSuggestion = document.querySelector("#suggestion__send");
let elSuggestionLocation = document.querySelector("#suggestion__location");
let elSuggestionDate = document.querySelector("#suggestion__date");
let elSuggestionReason = document.querySelector("#suggestion__reason");
let elModal = document.querySelector("#modal");
let elBnModalClose = document.querySelector("#modal__close");

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

// function to get 
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

// event listener to send form
elBtSuggestion.addEventListener("click", function(e) {
    e.preventDefault();
    let location = elSuggestionLocation.value;
    let date = elSuggestionDate.value;
    let reason = elSuggestionReason.value;
    if(location !== "" && date !== "" && reason !== "") {
        confirmSuggestion(location, date, reason);
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
    getCoordinates("geoCodingGeneral", elSuggestionLocation.value);
});

setCurrentDate();
setCurrentLocation();