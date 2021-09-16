/*
* Samantha Fernald
* 6/4/2021
* script.js
*
*
* */

function selectRandom(items) {
    let selectedItem = items[Math.floor(Math.random() * items.length)];
    let targetAnimalElement = document.getElementById("targetAnimal");
    targetAnimalElement.innerHTML = selectedItem;

    return selectedItem;
}

function validateGuess(correctAnimal, animalGuessed) {
    let guessResult = document.getElementById("guessResult");

    if(correctAnimal === animalGuessed) {
        guessResult.innerHTML = "You got it!";
        guessResult.className = "correctGuess";
        return true;
    } else {
        guessResult.innerHTML = "Nope! Guess again.";
        guessResult.className = "incorrectGuess";
        return false;
    }
}

function setUpGame(animals) {
    const targetAnimal = selectRandom(animals);
    const images = document.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener(
            "click",
            function (e) {
                for (let j = 0; j < images.length; j++) {
                    images[j].className = "";
                }

                const element = e.target;
                const animalGuessed = element.id; //store the animal name in the ID attribute

                const result = validateGuess(targetAnimal, animalGuessed);
                element.className = result ? "clicked clicked-correct" : "clicked clicked-incorrect";
            });
    }
}

function configReplayGameButton(){
    let replayButton = document.getElementById("playAgain");
    replayButton.onclick = () => setUpGame(bigCats);
}


const bigCats = ["cheetah", "leopard", "joe", "lion", "lynx", "ocelot", "tiger", "carole", "panther"];
setUpGame(bigCats);
configReplayGameButton();