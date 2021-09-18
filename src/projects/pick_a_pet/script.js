/*
* Samantha Fernald
* 4/27/2021
* script.js
*
* This program takes in a user's age and preference of an indoor/outdoor animal and recommends a pet based on those inputs
* */

const PET_TYPE_STRING = "You should own a";
const INDOOR = "indoor";
const OUTDOOR = "outdoor";
let button = document.getElementById("myButton");

//Calls the programs other functions when button is clicked
function onButtonClick() {
    let age = getAge();
    document.getElementById("userAge").innerHTML = `Age: ${age}`;
    let petType = getType();
    document.getElementById("petPreference").innerHTML = ` Type: ${petType}`;
    pickPet(age, petType);

}

button.addEventListener("click", onButtonClick);

//Takes in the age of a user
function getAge() {
    let agePrompt = prompt("How old are you?");
    return parseInt(agePrompt);
}

//Takes in the preference of indoor or outdoor pet from a user
function getType() {
    let outdoorVsIndoor = prompt("Would you like an indoor or outdoor pet?");
    outdoorVsIndoor = outdoorVsIndoor.toLocaleLowerCase();
    return outdoorVsIndoor;
}

// const img = document.getElementById("blahhh")
// img.src = "imTheNewUrl.jpg"

//Picks a pet based on user input
function pickPet(age, petType) {
    if(petType === OUTDOOR) {
        if (age >= 0 && age <= 30) {
            document.getElementById("animalType").innerHTML = ` ${PET_TYPE_STRING} cow!`;
            const img = document.getElementById("petPic");
            img.src = "images/cow.jpeg";
            img.alt = "Highland cow eats grass";
        } else if (age >= 31 && age <= 60) {
            document.getElementById("animalType").innerHTML = ` ${PET_TYPE_STRING} monkey!`;
            const img = document.getElementById("petPic");
            img.src = "images/monkey.jpg";
            img.alt = "Lemur with tongue out, eating fruit";
        } else {
            document.getElementById("animalType").innerHTML = ` ${PET_TYPE_STRING} giraffe!`;
            const img = document.getElementById("petPic");
            img.src = "images/giraffe.jpg";
            img.alt = "Baby giraffe laying next to German Shepard";
        }
    }
    else if (petType === INDOOR) {
        if(age >= 0 && age <= 30) {
            document.getElementById("animalType").innerHTML = ` ${PET_TYPE_STRING} bird!`;
            const img = document.getElementById("petPic");
            img.src = "images/bird.jpg";
            img.alt = "Close up of parrot's face";
        }
        else if(age >= 31 && age <= 60) {
            document.getElementById("animalType").innerHTML = ` ${PET_TYPE_STRING} dog!`;
            const img = document.getElementById("petPic");
            img.src = "images/dog.jpeg";
            img.alt = "Dog with tongue out in desert landscape";
        }
        else {
            document.getElementById("animalType").innerHTML = ` ${PET_TYPE_STRING} cat!`;
            const img = document.getElementById("petPic");
            img.src = "images/cat.jpeg";
            img.alt = "Tortoiseshell cat lies in grass";
        }
    }
    else {
            document.getElementById("animalType").innerHTML = `Not a valid input`;
        }
}


