// DOM Elements
var btn = document.querySelector(".cook-button");
var recipeSection = document.querySelector("#dishes");
var clearBtnContainer = document.querySelector(".button-container")
var potImg = document.querySelector(".cookpot-image")
var radioButtonSelection = document.querySelectorAll('input[name="choice"]');
var savedRecipesSection = document.querySelector(".saved-recipes-section");
var sides = document.querySelector(".saved-sides");
var mains = document.querySelector(".saved-mains");
var desserts = document.querySelector(".saved-desserts");
var full = document.querySelector(".saved-full");
var goBackBtn = document.querySelector(".go-back");
var savedBtn = document.querySelector(".recipe-button");
let savedDishes = [sides, mains, desserts, full];

//Event Listeners
btn.addEventListener("click", dinnerSelection);
savedBtn.addEventListener("click", showSavedRecipes);
goBackBtn.addEventListener("click", backFromSaved);

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

function updateUserBase() {
  deserializedUserBase = JSON.parse(localStorage.getItem("userBase"));
  for (var user of deserializedUserBase) {
    if (loggedIn.username === user.username) {
      user.favDishes = loggedIn.favDishes;
      localStorage.setItem("userBase", JSON.stringify(deserializedUserBase));
    }
  }
}

function addFavDish() {
  var recipe = document.querySelector(".recipe-text");
  userDishes = Object.entries(loggedIn.favDishes);
  var selectedValue;
  var saved;
  var recipeText = recipe.innerText;
  for (var rb of radioButtonSelection) {
    if (rb.checked) {
      selectedValue = rb.value;
    }
  }
  for (var savedDish of savedDishes) {
    if (selectedValue == savedDish.id) {
        saved = savedDish;
      }
    }
    for (let [type, dishes] of userDishes) {
      if (selectedValue === type) {
        if (!dishes.includes(recipeText)) {
          saved.innerText += `${recipeText}`;
          dishes.push(recipeText);
          updateUserBase();
          return
        }
      }
    }
  }

  function setFavoritedRecipes() {
  for (var side of loggedIn.favDishes.sides) {
    sides.innerText += `
    ${side}
    `
  }
  for (var main of loggedIn.favDishes.mains) {
    mains.innerText += `
    ${main}
    `
  }
  for (var dessert of loggedIn.favDishes.desserts) {
    desserts.innerText += `
    ${dessert}
    `
  }
  for (var fulls of loggedIn.favDishes.full) {
    full.innerText += `
    ${fulls}
    `
  }
}

  function showSavedRecipes() {
    recipeSelectionBox.classList.add("hidden");
    dishesBox.classList.add("hidden");
    dishesBox.classList.remove("dishes-box");
    savedRecipesSection.classList.remove("hidden");
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
