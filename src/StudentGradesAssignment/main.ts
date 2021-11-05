// Student Grades Assignment Start Code

// HTML Variables
const containerEl = document.getElementById("container");
const outputEl = document.getElementById("output");
const goBtnEl = document.getElementById("go");
const menuEl = document.getElementById("menu") as HTMLInputElement;

// Global Variable
let grades = [60, 70, 45, 20, 40, 90, 100, 30, 45, 75, 40, 80];
let maxGrade = 100; // grade values should be b/t 0 and max

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < grades.length; i++) {
    divHeight = (grades[i] / maxGrade) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "first40") {
    firstTo40();
  } else if (selection === "last50") {
    lastTo50();
  } else if (selection === "random100") {
    randomTo100();
  } else if (selection === "addRandom") {
    addRandomGrade();
  } else if (selection === "removeLast") {
    removeLastGrade();
  } else if (selection === "count50") {
    countBelow50();
  } else if (selection === "change50") {
    lowGradesTo50();
  } else if (selection === "increase10") {
    increaseGradesBy10();
  } else if (selection === "decrease10") {
    decreaseGradesBy10();
  } else if (selection === "remove50") {
    removeGradesBelow50();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function firstTo40() {
  // Set the grade of the first student to 40.
  grades[0] = 40;
  outputEl.innerHTML = "First grade to 40";
}

function lastTo50() {
  // Set the grade of the last student to 50.
  grades[grades.length - 1] = 50;
  outputEl.innerHTML = "Last grade to 50";
}

function randomTo100() {
  // Set the grade of a random student to 100.
  const randIdx = Math.floor(Math.random() * grades.length);
  grades[randIdx] = 100;
  outputEl.innerHTML = "Random grade to 100";
}

function addRandomGrade() {
  // Add a random grade between 0 and 100 to the end of the array.
  const randGrade = Math.random() * 100;
  grades.push(randGrade);
  outputEl.innerHTML = "Add random grade";
}

function removeLastGrade() {
  // Remove the last grade.
  grades.pop();
  outputEl.innerHTML = "Remove the last grade";
}

function countBelow50() {
  // Count how many grades are below 50.  Output the result.
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      count++;
    }
  }
  outputEl.innerHTML = `There are ${count} grades below 50`;
}

function lowGradesTo50() {
  // Change all grades that are below 50 to be equal to 50.
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      grades[i] = 50;
    }
  }
  outputEl.innerHTML = "Change low grades to 50";
}

function increaseGradesBy10() {
  // Increase each grade by 10%.
  for (let i = 0; i < grades.length; i++) {
    grades[i] *= 1.1;
    grades[i] = Math.min(grades[i], 100);
  }
  outputEl.innerHTML = "Increase all grades by 10%";
}

function decreaseGradesBy10() {
  // Decrease each grade by 10%.
  for (let i = 0; i < grades.length; i++) {
    grades[i] *= 0.9;
  }
  outputEl.innerHTML = "Decrease all grades by 10%";
}

function removeGradesBelow50() {
  // Remove all grades that are below 50.
  let newArr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 50) {
      newArr.push(grades[i]);
    }
  }
  grades = newArr;
  outputEl.innerHTML = "Remove grades below 50";
}

export {};
