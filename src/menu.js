import beefBurger from "../assets/images/beef-burger.png";
import kingBurger from "../assets/images/king-size-burger.png";
import vegeBurger from "../assets/images/vege-burger.png";


export class Menu {
  constructor() {
    this.datas = [
      {
      image: kingBurger,
      title: "King size burger",
      description: "The King Size Burger is a massive burger that includes a flame-grilled beef patty topped with melted cheese, fresh vegetables, and pickles, served in a toasted sesame seed bun.",
      price: "$20",
      },
      {
      image: beefBurger,
      title: "Beef burger",
      description: "This Beef Burger on a Stick includes a juicy beef patty served on a stick for easy eating, topped with fresh veggies and savory sauces.",
      price: "$15",
      },
      {
      image: vegeBurger,
      title: "Vegetarian burger",
      description: "The Vegetarian Burger features a hearty veggie patty made from fresh vegetables and grains, topped with lettuce, tomatoes, and a flavorful sauce.",
      price: "$13",
      }
    ]

    this.contentCon = document.querySelector("#content")
  }

  displayMenu(){
    const cardCon = document.createElement("div");
    cardCon.classList.add("card-container");

    this.datas.forEach((data) => {
   
    const card = document.createElement("div");
    card.classList.add("card");

    const imgCon = document.createElement("div");
    imgCon.classList.add("image-container");

    const img = document.createElement("img");
    img.src = data.image;

    const infoCon = document.createElement("div");
    infoCon.classList.add("info-container");

    const title = document.createElement("h1");
    title.textContent = data.title;

    const description = document.createElement("p");
    description.textContent = data.description;

    const price = document.createElement("h2");
    price.textContent = data.price;

    const buyNowBtn = document.createElement("button");
    buyNowBtn.classList.add("buy-now-button");
    buyNowBtn.textContent = "Buy now"

    imgCon.appendChild(img)
    card.appendChild(imgCon);
    infoCon.appendChild(title);
    infoCon.appendChild(description);
    infoCon.appendChild(price);
    infoCon.appendChild(buyNowBtn);
    card.appendChild(infoCon)
    cardCon.appendChild(card)
    this.contentCon.appendChild(cardCon)
    console.log("THIS IS MENU!");
    
    });
  }
}