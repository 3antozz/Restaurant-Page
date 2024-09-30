import burgerImage from "./burger.jpg"

const createHome = function () {
    const contentDiv = document.querySelector("#content");

    const header = document.createElement("h1");
    header.classList.add("main-header");
    header.innerHTML = "EL&nbsp;&nbsp;3ANTOCCINO";

    const centerDiv = document.createElement("div");
    centerDiv.classList.add("center");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-container");

    const img = document.createElement("img");
    img.src = burgerImage;
    img.alt = "Burger";
    imageDiv.appendChild(img);

    const rightTxt = document.createElement("div");
    rightTxt.classList.add("right-text");

    const descOne = document.createElement("h2");
    descOne.textContent = "Savor the Taste of Excellence";

    const descTwo = document.createElement("h2");
    descTwo.textContent = "Fresh Ingredients, Bold Flavors";

    const descThree = document.createElement("h2");
    descThree.textContent = "Beautifully Designed Place";

    rightTxt.append(descOne, descTwo, descThree);

    centerDiv.append(imageDiv, rightTxt);

    contentDiv.append(header, centerDiv);
    
}

export {createHome};