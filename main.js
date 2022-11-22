// Array Visulaizer

// HTML variable
let containerEL = document.getElementById("container");

// Global Variable
let myData = [];
for (let n = 1; n <= 50; n++) {
  myData.push(Math.random() * 600);
}
console.log(myData);

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  for (let i = 0; i < myData.length; i++) {
    outputStr += `<div style="height: ${myData[i]}px"></div>`;
  }

  containerEL.innerHTML = outputStr;
}

// Key Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if (event.keyCode === 38) {
    // Up Array -  AA 600 to the idex 0
    let middleIndex = Math.floor(myData.length / 2);
    myData.splice(middleIndex, 0, Math.random() * 600);
  } else if (event.keyCode === 40) {
    // Down Arrow - Remove element from middle
    let middleIndex = Math.floor(myData.length / 2);
    myData.splice(middleIndex, 1);
  }

  // if (event.keyCode === 38) {
  //   // Up Array -  Push Value to end of array
  //   myData.push(Math.random() * 600);
  // } else if (event.keyCode === 40) {
  //   // Down Arrow - Remove value from the end of the array
  //   let poppedValue = myData.pop();
  //   console.log(poppedValue);
  // }

  // Redraw the array
  drawArray();
}
