

export class About {
  constructor(){
    this.contentCon = document.querySelector("#content");
  }

  displayAbout(){
    const aboutCon = document.createElement("div");
    aboutCon.classList.add("about-container");

    const storyTitle = document.createElement("h1");
    const story = document.createElement("p");
    storyTitle.textContent = "Our Story"
    story.textContent = "Welcome to Ground Rules, where our passion for perfect burgers meets genuine hospitality. Since [year], we've been crafting mouthwatering burgers that keep our community coming back for more. What started as a simple dream has grown into a beloved local destination for burger enthusiasts."

    const setUsPartTitle = document.createElement("h1");
    const setUspart = document.createElement("p");
    setUsPartTitle.textContent = "What Sets Us Apart";
    setUspart.textContent = "At Ground Rules, we believe in doing things the right way. Every morning, our dedicated team hand-presses premium beef patties and bakes fresh buns from scratch. We source our ingredients from local farmers and prepare all our signature sauces in-house. No shortcuts, no compromises – just honest, delicious food made with care."

    const promisesTitle = document.createElement("h1");
    const promiseCon = document.createElement("ul");
    const promise1 = document.createElement("li");
    const promise2 = document.createElement("li");
    const promise3 = document.createElement("li");
    const promise4 = document.createElement("li");
    const promise5 = document.createElement("li");
    promisesTitle.textContent = "Our Promise to You";
    promise1.textContent = "Fresh, never frozen premium beef"
    promise2.textContent = "House-baked buns daily"
    promise3.textContent = "Locally sourced ingredients"
    promise4.textContent = "Made-from-scratch sauces"
    promise5.textContent = "Cooked exactly to your preference"


    const leadChef = document.createElement("p");
    const thankYouMessage = document.createElement("p");
    thankYouMessage.classList.add("thanks-message")
    leadChef.textContent = "Our passionate team, led by head chef Orakun, is committed to creating the perfect burger experience for every guest who walks through our doors. We're more than just a restaurant, we're part of this community, and we're proud to serve our neighbors the very best."
    thankYouMessage.textContent = "Thank you for being part of our story. We look forward to serving you soon!"

    aboutCon.appendChild(storyTitle);
    aboutCon.appendChild(story);
    aboutCon.appendChild(setUsPartTitle);
    aboutCon.appendChild(setUspart);
    aboutCon.appendChild(promisesTitle);
    promiseCon.appendChild(promise1);
    promiseCon.appendChild(promise2);
    promiseCon.appendChild(promise3);
    promiseCon.appendChild(promise4);
    promiseCon.appendChild(promise5);
    aboutCon.appendChild(promiseCon);
    aboutCon.appendChild(leadChef);
    aboutCon.appendChild(thankYouMessage);
    this.contentCon.appendChild(aboutCon);

  }
}