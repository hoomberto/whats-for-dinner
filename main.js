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
    <h1>${sides[randomIndexArray(sides)]}!</h1>
    `;
  }
  else if (rbv === "mains") {
    recipeSection.innerHTML += `
    <h1>${mains[randomIndexArray(mains)]}!</h1>
    `;
  }
  else if (rbv === "desserts") {
    recipeSection.innerHTML += `
    <h1>${desserts[randomIndexArray(desserts)]}!</h1>
    `;
  }
  else if (rbv === "full") {
    recipeSection.innerHTML += `
    <h1>${mains[randomIndexArray(mains)]} with a side of ${sides[randomIndexArray(sides)]} and ${desserts[randomIndexArray(desserts)]} for dessert!</h1>
    `
  }
}
