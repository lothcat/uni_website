function checkForm() {
    let isValid = true;

    //Check size
    let size = document.getElementById("size").value;
    let errorSize = document.getElementById("errorSize");

    if(size === "none") {
        errorSize.className = "error";
        isValid = false;
    } else {
        errorSize.className = "hidden";
    }

    //Check milk temperature if temperature is an option
    if (document.getElementsByName("temperature").length > 0) {
        let temperatureChoice = document.getElementsByName("temperature");
        let tempNoSelection = document.getElementById("errorTemp");
        let setTemp = false;

        for(let i = 0; i < temperatureChoice.length; i++) {
            if (temperatureChoice[i].checked) {
                setTemp = true;
                break;
            }
        }

        if(!setTemp) {
            tempNoSelection.className = "error";
            isValid = false;
        } else {
            tempNoSelection.className = "hidden";
        }
    }

    // Check ice level if ice level is an option
    if (document.getElementsByName("ice").length > 0) {
        let iceLevel = document.getElementsByName("ice");
        let iceNoSelection = document.getElementById("errorIce");
        let setIce = false;

        for(let i = 0; i < iceLevel.length; i++) {
            if (iceLevel[i].checked) {
                setIce = true;
                break;
            }
        }

        if(!setIce) {
            iceNoSelection.className = "error";
            isValid = false;
        } else {
            iceNoSelection.className = "hidden";
        }
    }

    //Check Milk
    let milkType = document.getElementById("milk").value;
    let milkNotSelected = document.getElementById("errorMilk");

    if(milkType === "none") {
        milkNotSelected.className = "error";
        isValid = false;
    } else {
        milkNotSelected.className = "hidden";
    }

    //Check Chocolate
    let chocolate = document.getElementsByName("chocolate");
    let chocolateNotSelected = document.getElementById("errorChocolate");
    let setChocolate = false;

    for(let i = 0; i < chocolate.length; i++) {
        if (chocolate[i].checked) {
            setChocolate = true;
            break;
        }
    }

    if(!setChocolate) {
        chocolateNotSelected.className = "error";
        isValid = false;
    } else {
        chocolateNotSelected.className = "hidden";
    }

    return isValid;
}

//Disable if vegan or allergic
function checkDietaryPreference() {
    const allergyChecked = document.getElementById("allergy").checked;
    const veganChecked = document.getElementById("vegan").checked;

    document.getElementById("nutty").disabled = allergyChecked || veganChecked;
    document.querySelector("label[for=nutty]").className = (allergyChecked || veganChecked) ? "strikethrough" : "";

    document.getElementById("dark").disabled = veganChecked;
    document.querySelector("label[for=dark]").className = veganChecked ? "strikethrough" : "";

    document.getElementById("mint").disabled = veganChecked;
    document.querySelector("label[for=mint]").className = veganChecked ? "strikethrough" : "";

    document.getElementById("mexican").disabled = veganChecked;
    document.querySelector("label[for=mexican]").className = veganChecked ? "strikethrough" : "";

    document.getElementById("whip").disabled = veganChecked;
    document.querySelector("label[for=whip]").className = veganChecked ? "strikethrough" : "";

    const milk = document.getElementById("milk").value;
    if(veganChecked && (milk === "whole" || milk === "two")) {
        document.getElementById("milk").value = "none";
    }

    document.getElementById("whole").disabled = veganChecked;
    document.getElementById("two").disabled = veganChecked;
}

//Add cost based on selection
function costBasedOnSelection() {
    let totalCost = 0;
    const size = document.getElementById("size").value;
    const milk = document.getElementById("milk").value

    const hasWhip = document.getElementById("whip").checked;
    const hasWhole = milk === "whole";
    const hasTwoPercent = milk === "two";

    //Size
    if(size === "small") {
        totalCost += 5;
    }
    else if(size === "medium") {
        totalCost += 6;
    }
    else if(size === "large") {
        totalCost += 7;
    }
    else {
        totalCost += 0;
    }

    //Milk
    if(hasWhole || hasTwoPercent) {
        totalCost += 1;
    }

    //Whip
    if(hasWhip) {
        totalCost += .35;
    }
    else {
        totalCost += 0;
    }

    document.getElementById("total").innerText = "$" + totalCost.toFixed(2);
}

function switchPageHome() {
    window.location.href = "../html/index.html";
}

function switchPageOrder() {
    const formIsValid = checkForm()

    if (formIsValid) {
        window.location.href = "../html/purchased.html";
    }
}

//Link buttons to the page
let navToHome = document.getElementById("home");
navToHome.onclick = switchPageHome;

let navToOrder = document.getElementById("order");
navToOrder.onclick = switchPageOrder;

document.getElementById("mokka-form").onchange = costBasedOnSelection;
document.getElementById("vegan").onchange = checkDietaryPreference;
document.getElementById("allergy").onchange = checkDietaryPreference;