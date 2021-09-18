/*
* Samantha Fernald
* 5/5/2021
* script.js
*
* This program takes in a user's numbered grades then calculates the average and returns it and the associated letter grade
* */

let userInput = document.getElementById("enterNum")
let submitBtn = document.getElementById("submitGrade");
let avgBtn = document.getElementById("calcGradeAvg");
let output = document.getElementById("gradeOutput");
let avgOutput = document.getElementById("avgOutput");

let grades = [];

//Add user grade to the array
function addGrade() {
    let newGrade = parseInt(userInput.value);
    userInput.value= "";

    if (isNaN(newGrade) || newGrade < 0 || newGrade > 100)
    {
        alert("Grade must be between 0 and 100");
    }
    else {
        grades[grades.length] = newGrade;

        displayGrades();
    }

}

//Display input grades to user
function displayGrades() {
    let displayOutput = `Grades: ${grades.join(", ")}`;

    output.innerHTML = displayOutput;
}

//Calculates the average of grades input
function calcAverage() {
    let gradeTotal = 0;
    let gradeDivisor = grades.length;

    for (let i = 0; i < grades.length; i++) {
        gradeTotal += grades[i];
    }

    let average = gradeTotal / gradeDivisor;
    let letter = letterGrade(average);
    avgOutput.innerHTML = `Average Grade: ${average.toFixed(2)} (${letter})`;
}

//Convert Average grade to letter grade
function letterGrade(average) {
    if(average < 60) {
        return "F";
    }
    else if(average < 70) {
        return "D";

    }
    else if(average < 80) {
        return "C";

    }
    else if(average < 90) {
        return "B";

    }
        return "A";
}

submitBtn.onclick = addGrade;
avgBtn.onclick = calcAverage;