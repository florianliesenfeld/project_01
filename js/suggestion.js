// get form data about travel suggestion

let fSuggestion = document.querySelector("#suggestion");
let elBtSuggestion = document.querySelector("#suggestion__send");
let elSuggestionLocation = document.querySelector("#suggestion__location");
let elSuggestionDate = document.querySelector("#suggestion__date");
let elSuggestionReason = document.querySelector("#suggestion__reason");
let elModal = document.querySelector("#modal");
let elBnModalClose = document.querySelector("#modal__close");

function setCurrentDate() {
    const date = today.toISOString().split("T")[0];
    elSuggestionDate.setAttribute("min", date);
    elSuggestionDate.setAttribute("value", date);
}

function confirmSuggestion(location, date, reason) {
    document.querySelector("#modal h2").textContent = "thanks";
    document.querySelector("#modal p").innerHTML = `for suggesting <span id="modal__location">${location}</span> on the <span id="modal__date">${date}</span> because <span id="modal__reason">${reason}</span>`;
    elModal.showModal();
}

function showError() {
    document.querySelector("#modal h2").textContent = "error";
    document.querySelector("#modal p").innerHTML = "please enter a destination and a reason";
    elModal.showModal();
}

elBtSuggestion.addEventListener("click", function(e) {
    e.preventDefault();
    let location = elSuggestionLocation.value;
    let date = elSuggestionDate.value;
    let reason = elSuggestionReason.value;
    if(location !== "" && date !== "" && reason !== "") {
        confirmSuggestion(location, date, reason);
        elSuggestionLocation.value = "";
        elSuggestionDate.value = "";
        elSuggestionReason.value = "";
    } else {
        showError();
    }
});

elBnModalClose.addEventListener("click", function() {
    elModal.close();
    elSuggestionLocation.focus();
})

setCurrentDate();