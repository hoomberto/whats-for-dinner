// DOM Elements
var btn = document.querySelector(".cook-button");
var recipeSection = document.querySelector("#dishes");
//Event Listeners
btn.addEventListener("click", radioButtonValue);
//Functions
function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
