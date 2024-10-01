import burgerImage from "./home.jpg"

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
    descOne.textContent = "Dou9 Bennet el Khamej-w-Bnin";

    const descTwo = document.createElement("h2");
    descTwo.textContent = "Ingredients mn sog ta3 boufarik ga3 khorda";

    const descThree = document.createElement("h2");
    descThree.textContent = "Décor dakhel ta7ssb rak f Ouled Fayet";

    rightTxt.append(descOne, descTwo, descThree);

    centerDiv.append(imageDiv, rightTxt);

    contentDiv.append(header, centerDiv);
    
}

export {createHome};