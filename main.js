// DOM Elements
var btn = document.querySelector(".cook-button");
var recipeSection = document.querySelector("#dishes");
//Event Listeners
btn.addEventListener("click", dinnerSelection);
//Functions
function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomDish(rbv) {
  recipeSection.innerHTML = `<h4>You should make</h4>`;
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
}

function dinnerSelection() {
  var radioButtonSelection = document.querySelectorAll('input[name="choice"]');
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
