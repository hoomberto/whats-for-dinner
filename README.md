<h1 align="center">What's for Dinner?</h1>

Turing 2103 FE Week 3 Solo Challenge
## Table of Contents
* [Introduction](#introduction)
* [Links](#Links)
* [Features](#Features)
* [Future Additions](#Future-Additions)
* [Languages](#Languages)

## Introduction
This is an interactive website that utilizes localStorage so that a user can create an account, login with account, view random dishes based on a selection, favorite the randomly displayed dish, and view the favorited dishes. Users will have their favorite dishes stored to localStorage and retrieved upon login.

Calling resetLocalStorage(); in the dev console will quickly reset the userBase to when initially visited. 

## Links  
- To view the project in action, [click here!](https://hoomberto.github.io/whats-for-dinner/)

## Features

New users can sign up to create an account that requires a matching username and password to log in. 
![alt text](https://media.giphy.com/media/nees5J2ylue53ye3FC/giphy.gif "Login System")

Users can see random dish displayed based on a selection they choose
![alt text](https://media.giphy.com/media/Y0WFOO24SKK3Dpa3x7/giphy.gif "Display random dishes")

Users can favorite a random dish that updates the localStorage userbase with the loggedin user's favorited dishes<br>
A user will not favorite a random dish that they have already favorited. 
![alt text](https://media.giphy.com/media/oX5GWWIMLzp0ZAfZcZ/giphy.gif "Favorite a random dish")

Users can see their favorite recipes immediately after favoriting them   
![alt text](https://media.giphy.com/media/v6JzjVWzzb0Mm8Wdc6/giphy.gif "View saved recipes")

Site will remember a user's favorite recipes upon leaving site and logging back in.  
![alt text](https://media.giphy.com/media/NKCerQbl9ic2gyq4di/giphy.gif "localStorage demonstration")

### Future Additions
- Get CSS to be even more dynamic when resized for smaller screens
- Add more CSS in general to make everything look more clean
- Create "Add recipe" button that lets users add their own recipes
- Refactoring lots of code
- Create functionality to delete a saved recipe by double clicking it
- Further inspect bug where github deploys a previous version of the project, causing a user's favDishes.mains property to show up as "favDishes.main". This in turn screws up how it's called and stops the saved recipes functionality from working correctly. 
- Create mobile interface that has live-image recognition capability to scan recognizable food inventories (pantry, fridge, freezer, cupboard) and add them to appropriate site array. 


## Languages
JavaScript  
CSS  
HTML   
