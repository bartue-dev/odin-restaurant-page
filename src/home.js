import { Menu } from "./menu";


//menu instance
const menu = new Menu();

export class Home {
  constructor() {
    this.contentCon = document.querySelector("#content");
  }

displayHome() {
    const quoteCon = document.createElement("div");
    const orderNowBtn = document.createElement("button");
    const quoteEl = document.createElement("h3")
    orderNowBtn.textContent = "order now"
    quoteCon.classList.add("quote-container");
    quoteEl.textContent = "life is too short for a well-done burger"
    
    quoteCon.appendChild(quoteEl)
    quoteCon.appendChild(orderNowBtn)
    this.contentCon.appendChild(quoteCon);

    const navMenu = document.querySelector(".menu")
    const navHome = document.querySelector(".home");
    orderNowBtn.addEventListener("click", (event) => {
      event.preventDefault();
      this.contentCon.innerHTML = ""
      navMenu.style.textDecoration = "underline"
      navHome.style.textDecoration = "none"

      menu.displayMenu();
    })
  }
}

