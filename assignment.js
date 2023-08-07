let selectionContainer1 = document.getElementById("selectionContainer1");
let selectionContainer2 = document.getElementById("selectionContainer2");
let selectionContainer3 = document.getElementById("selectionContainer3");
let total = document.getElementById("total");
let selectedContainerTopbox = document.getElementById("selectionContainerTopbox");
let selectedContainerMiddlebox = document.getElementById("selectionContainerMiddlebox");
let selectedContainerBottombox = document.getElementById("selectionContainerBottombox");

function resetContainers() {
    selectionContainer1.style.display = "none";
    selectionContainer2.style.display = "none";
    selectionContainer3.style.display = "none";
}

resetContainers();
/* This method will display Product details and Price details based on user's selection */
function onOrderSelect(selection) {
    resetContainers();
    
    if (selection == 1) {
        selectionContainer1.style.display = "block";
        selectedContainerTopbox.classList.add("selected-container");
        selectedContainerMiddlebox.classList.remove("selected-container");
        selectedContainerBottombox.classList.remove("selected-container");
        total.textContent = '195.00';
    }
    else if (selection == 2) {
        selectionContainer2.style.display = "block";
        selectedContainerMiddlebox.classList.add("selected-container");
        selectedContainerTopbox.classList.remove("selected-container");
        selectedContainerBottombox.classList.remove("selected-container");
        total.textContent = '345.00';
    }
    else if (selection == 3) {
        selectionContainer3.style.display = "block";
        selectedContainerBottombox.classList.add("selected-container");
        selectedContainerTopbox.classList.remove("selected-container");
        selectedContainerMiddlebox.classList.remove("selected-container");
        total.textContent = '528.00';
    }
}