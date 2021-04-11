// DOM Elements
var loginFields = document.querySelectorAll('input[name="login"]');
var userField = document.querySelector(".user-field");
var passField = document.querySelector(".pass-field");
var signupBtn = document.querySelector(".signup-button");
var loginBtn = document.querySelector(".login-button");
var resetBtn = document.querySelector(".reset-button");
var loginError = document.querySelector(".error1");
var loginContainer = document.querySelector("#login");
var loginForm = document.querySelector(".login-form");
//

// Global Variables
var userList = [];
//

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

// EVENT HANDLER

signupBtn.addEventListener("click", signUp);
loginBtn.addEventListener("click", logIn);

function resetLocalStorage() {
  var resetList = [];
  strList = JSON.stringify(resetList);
  localStorage.setItem('userBase', strList);
}

function resetForm() {
  userField.value = "";
  passField.value = "";
}

function signUp(event) {
  event.preventDefault();
  if (!localStorage.getItem("userBase")) {
    resetLocalStorage();
  }
  if (userField.value && passField.value) {
    deserializedUserBase = JSON.parse(localStorage.getItem("userBase"));
    for (var user of deserializedUserBase) {
      if (user.username === userField.value) {
        alert("This username already exists. Please choose a different username");
        loginError.classList.remove("hidden");
        return
      }
    }
    newUser = new User(userField.value, passField.value);
    deserializedUserBase.push(newUser);
    localStorage.setItem("userBase", JSON.stringify(deserializedUserBase));
    alert(`Thank you for signing up, ${userField.value}! Please log in now.`)
    return;
  }
alert("Please fill sign up form completely.")
return;
}

function logIn(event) {
  event.preventDefault();
  deserializedUserBase = JSON.parse(localStorage.getItem("userBase"));
  for (var user of deserializedUserBase) {
    if (user.username === userField.value && user.password === passField.value) {
      alert(`Welcome, ${user.username}!`);
      console.log("works so far");
      loginContainer.classList.add("hidden");
      loginContainer.classList.remove("login-container");
      loginForm.classList.add("hidden");
      return
    }
  }
  alert("Failed to login! Please enter a valid username and password.");
  resetForm();
  return
}
