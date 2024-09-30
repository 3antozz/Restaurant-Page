import "./styles.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";

(function load () {
    createHome();
    const contentDiv = document.querySelector("#content");
    const navigation = document.querySelector("nav");
    const homeBtn = document.querySelector("  nav button:nth-child(1)");
    const menuBtn = document.querySelector("  nav button:nth-child(2)");
    navigation.addEventListener("click", (event) => {

        if (event.target.getAttribute("data-index") === "1" ) {
            homeBtn.classList.add("selected-button");
            menuBtn.classList.remove("selected-button");
            contentDiv.textContent = "";
            createHome();
        }
        else if ((event.target.getAttribute("data-index") === "2" )) {
            menuBtn.classList.add("selected-button");
            homeBtn.classList.remove("selected-button");
            contentDiv.textContent = "";
            createMenu();
        }
    })

})()


console.log("im working!");