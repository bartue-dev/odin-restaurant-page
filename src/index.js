import "./styles.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";






//Home
const home = new Home();
home.displayHome();

//Menu
const menu = new Menu();

//About
const about = new About();

//nav button
const navBtn = document.querySelectorAll("nav button");

navBtn.forEach((button) => {

  document.querySelector(".home").style.textDecoration = "underline";
  document.querySelector(".home").style.textUnderlineOffset = "4px"

  button.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#content").innerHTML = "";
   
    navBtn.forEach((button) => {
      button.style.textDecoration = "none";
    });

    button.style.textDecoration = "underline";
    button.style.textUnderlineOffset = "4px";
  
    switch(button.textContent){
      case "Home":
        home.displayHome();
        break;
      case "Menu":
        menu.displayMenu();
        break;
      case "About":
        console.log("THIS IS ABOUT BUTTON!")
        about.displayAbout();
    }
    
  })

});