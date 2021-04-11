// DOM Elements
var btn = document.querySelector(".cook-button");
var recipeSection = document.querySelector("#dishes");
var clearBtnContainer = document.querySelector(".button-container")
var potImg = document.querySelector(".cookpot-image")
var radioButtonSelection = document.querySelectorAll('input[name="choice"]');

//Event Listeners
btn.addEventListener("click", dinnerSelection);

// GLOBAL Variable
var loggedIn;

//Functions
function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomDish(rbv) {
  // var dinnerType = rbv;
  recipeSection.innerHTML = "";
  recipeSection.innerHTML += `<h4>You should make</h4>`;
  recipeSection.innerHTML += `<br>`;
  if (rbv === "sides") {
    recipeSection.innerHTML += `
    <h1 class="recipe-text">${sides[randomIndex(sides)]}</h1>
    `;
  }
  else if (rbv === "mains") {
    recipeSection.innerHTML += `
    <h1 class="recipe-text">${mains[randomIndex(mains)]}</h1>
    `;
  }
  else if (rbv === "desserts") {
    recipeSection.innerHTML += `
    <h1 class="recipe-text">${desserts[randomIndex(desserts)]}</h1>
    `;
  }
  else if (rbv === "full") {
    recipeSection.innerHTML += `
    <h1 class="recipe-text">${mains[randomIndex(mains)]} with a side of ${sides[randomIndex(sides)]} and ${desserts[randomIndex(desserts)]} for dessert</h1>
    `
  }
  recipeSection.innerHTML += `<div class="button-container"><button class="btn"><img class="heart" src="assets/heart.png" alt="heart-icon"></button><button class="clear-button">Clear</button></div>`
  var clearBtn = document.querySelector(".clear-button");
  var heartBtn = document.querySelector(".btn");
  clearBtn.addEventListener("click", clear);
  heartBtn.addEventListener("click", addFavDish);
}

// function radioValue() {
//   var selectedValue;
//   for (var radioButton of radioButtonSelection) {
//     if (radioButton.checked) {
//       selectedValue = radioButton.value;
//       break;
//     }
//   }
// }



function addFavDish() {
  var recipe = document.querySelector(".recipe-text");
  userDishes = Object.entries(loggedIn.favDishes);
  var selectedValue;
  var recipeText = recipe.innerText;
    for (var rb of radioButtonSelection) {
      if (rb.checked) {
        selectedValue = rb.value;
      }
    for (let [type, dishes] of userDishes) {
      if (selectedValue === type) {
        if (!dishes.includes(recipeText)) {
          dishes.push(recipeText);
          // updateUserBase();
          return
        }
      }
    }
  }
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
