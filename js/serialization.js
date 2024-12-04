// class for storing data in local storage
let locations;

class Location {
    constructor() {
        this.data = {};
    }

    // function to store the offline data into the local storage - only executed once
    initializeLocalStorage() {
        if(!JSON.parse(localStorage.getItem("initialized"))) {
            localStorage.setItem("locationsSerialized", JSON.stringify(locationsOffline));
            localStorage.setItem("initialized",JSON.stringify(true));
        }
    }

    // function to add a suggested location to the locations array and store it in local storage
    addLocation(location) {
        locations.push(location);
        localStorage.setItem("locationsSerialized", JSON.stringify(locations));
        locationsSerialized.loadData();
    }

    // function is not used yet
    saveData(form) {
        const inputs = form.querySelectorAll("input, textarea, select");

        for(let input of inputs) {
            const inputType = input.getAttribute("type");
            let value;

            switch(inputType) {
                case "radio":
                    if(input.checked) {
                        value = input.value;
                    }
                    break;
                case "checkbox":
                    value = input.checked;
                    break;
                default:
                    value = input.value;
                    break;
            }

            if(value !== undefined) {
                this.data[input.id] = value;
            }
        }
        localStorage.setItem("locationsSerialized", JSON.stringify(this.data));
    }

    // function to load data from the local
    loadData() {
        locations = JSON.parse(localStorage.getItem("locationsSerialized"));
        // for (const key in data) {
        //     if(data.hasOwnProperty(key)) {
        //         const input = document.querySelector(`#${key}`);
        //         const inputType = input.getAttribute("type");

        //         switch (inputType) {
        //             case "radio":
        //                 if(input.value === data[key]) {
        //                     input.checked = true;
        //                 }
        //                 break;
        //             case "checkbox":
        //                 input.checked = true;
        //                 break;
        //             default:
        //                 input.value = data[key];
        //                 break;
        //         }
        //     }
        // }
    }
}

const locationsSerialized = new Location();

locationsSerialized.initializeLocalStorage();
locationsSerialized.loadData();