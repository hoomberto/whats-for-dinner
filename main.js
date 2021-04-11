// DOM Elements
var btn = document.querySelector(".cook-button");
var recipeSection = document.querySelector("#dishes");
var clearBtnContainer = document.querySelector(".button-container")
var potImg = document.querySelector(".cookpot-image")
var radioButtonSelection = document.querySelectorAll('input[name="choice"]');
//Event Listeners
btn.addEventListener("click", dinnerSelection);
//Functions
function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomDish(rbv) {
  recipeSection.innerHTML = "";
  recipeSection.innerHTML += `<h4>You should make</h4>`;
  recipeSection.innerHTML += `<br>`;
  if (rbv === "sides") {
    recipeSection.innerHTML += `
    <h1>${sides[randomIndex(sides)]}!</h1>
    `;
  }
  else if (rbv === "mains") {
    recipeSection.innerHTML += `
    <h1>${mains[randomIndex(mains)]}!</h1>
    `;
  }
  else if (rbv === "desserts") {
    recipeSection.innerHTML += `
    <h1>${desserts[randomIndex(desserts)]}!</h1>
    `;
  }
  else if (rbv === "full") {
    recipeSection.innerHTML += `
    <h1>${mains[randomIndex(mains)]} with a side of ${sides[randomIndex(sides)]} and ${desserts[randomIndex(desserts)]} for dessert!</h1>
    `
  }
  recipeSection.innerHTML += `<div class="button-container"><button class="clear-button">Clear</button></div>`
  clearBtn = document.querySelector(".clear-button");
  clearBtn.addEventListener("click", clear);
}

function dinnerSelection() {
  var selectedValue;
  for (var radioButton of radioButtonSelection) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      break;
    }
  }
  if (selectedValue) {
    getRandomDish(selectedValue);
  }
  else {
    alert("Please choose a dinner option.")
  }
}

function clear() {
  recipeSection.innerHTML = "";
  recipeSection.innerHTML += `<img class="cookpot-image" src="assets/cookpot.svg" alt="cookpot icon">`;
  for (var rb of radioButtonSelection) {
    if (rb.checked) {
      rb.checked = false;
      return;
    }
  }
}
