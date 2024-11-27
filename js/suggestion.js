// get suggestion

let fSuggestion = document.querySelector("#suggestion");
let elBtSuggestion = document.querySelector("#suggestion__send");
let elSuggestionLocation = document.querySelector("#suggestion__location");
let elSuggestionReason = document.querySelector("#suggestion__reason");
let elModal = document.querySelector("#modal");
let elBnModalClose = document.querySelector("#modal__close");

function confirmSuggestion(location, reason) {
    document.querySelector("#modal h2").textContent = "thanks";
    document.querySelector("#modal p").innerHTML = `for suggesting <span id="modal__location">${location}</span> because <span id="modal__reason">${reason}</span>`;
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
    let reason = elSuggestionReason.value;
    if(location !== "" && reason !== "") {
        confirmSuggestion(location, reason);
        elSuggestionLocation.value = "";
        elSuggestionReason.value = "";
    } else {
        showError();
    }
});

elBnModalClose.addEventListener("click", function() {
    elModal.close();
    elSuggestionLocation.focus();
})
