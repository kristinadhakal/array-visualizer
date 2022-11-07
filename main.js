// Array Visulaizer

// HTML variable
let containerEL = document.getElementById("container");

// Global Variable
let myData = [400, 500, 250, 550, 100, 300];

// Display Data
drawArray();

function drawArray() {
  let outputStr =  "";
  for (let i = 0; i < myData.length; i++) {
    outputStr += `<div>${myData[i]}</div>`
    }

    containerEL.innerHTML = outputStr;
}
