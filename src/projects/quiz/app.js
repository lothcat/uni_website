function populate() {
  if (quiz.isEnded()) {
    showScores();
    //newGame();
  } else {
    //show Q
    let element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;


    //show choices
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
};

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  }

}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  const gameOverHTML = `
    <h1>Result</h1>
    <h2 id="score"> Your score: ${quiz.score}</h2>

    <button id="replayButton" onClick="newGame()">Replay</button>
  `;
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}



function newGame() {
  location.reload();
  //let restart;
  //restart = document.getElementById("restart");
  //restart.addEventListener("click", newGame);
  //document.getElementById("newGame").style.display = "none";
}

const questions = [
  new Question("What flower was more valuable than gold in Holland in the 1600s?", ["Rose", "Tulip", "African Daisy", "Milkweed"], "Tulip"),
  new Question("What marsh flower bud is pickled as a substitute for capers?", ["Aster", "Nicotiana", "Verbena", "Marigold"], "Marigold"),
  new Question("What flower was used by Native American women to ensure an easy labor and childbirth?", ["Blue Cohosh", "Blue Star Flower", "Bluebell", "Blue-Eyed Grass"], "Blue Cohosh"),
  new Question("What flower blooms only at night, closing during the day?", ["Nightshade", "Moon Flower", "Morning Glory", "Star Flower"], "Moon Flower"),
  new Question("What flower is related to apples, raspberries, cherries, peaches, plums, nectarines, pears and almonds?", ["Verbena", "Tulip", "Violet", "Rose"], "Rose")
];

const quiz = new Quiz(questions);
populate();
