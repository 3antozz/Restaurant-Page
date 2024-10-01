import burgerImg from "./burger.jpg";
import pizzaImg from "./Pizza.jpg";
import sandwichImg from "./Sandwich.jpg";

const createMenu = function () {
    const contentDiv = document.querySelector("#content");
    const burgersCat = (function () {

        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
    
        const categoryTitle = document.createElement("h1");
        categoryTitle.textContent = "Burgers";

        const listingsDiv = document.createElement("div");
        listingsDiv.classList.add("listings");

        for (let i = 1; i <= 4; i++) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
    
            const leftDiv = document.createElement("div");
            leftDiv.classList.add("left");
    
            const img = document.createElement("img");
            img.src = burgerImg;
            img.alt = "Burger";
    
            const rightDiv = document.createElement("div");
            rightDiv.classList.add("right");
    
            const itemTitle = document.createElement("h2");
            itemTitle.textContent = "Chkopi Burger";
    
            const itemIngredient = document.createElement("h3");
            itemIngredient.textContent = "Ingredients:";
    
            const ingredients = document.createElement("p");
            ingredients.textContent = "Zoubdet el koko, Ma3joune, El fosto9, Andrew Tate, Kra3 Kelb";
    
            rightDiv.append(itemTitle, itemIngredient, ingredients);
            leftDiv.appendChild(img);
    
            itemDiv.append(leftDiv, rightDiv);
    
            listingsDiv.appendChild(itemDiv);
    
            categoryDiv.append(categoryTitle, listingsDiv);
    
            contentDiv.appendChild(categoryDiv);
        }

    })()

    const pizzaCat = (function () {

        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
    
        const categoryTitle = document.createElement("h1");
        categoryTitle.textContent = "Pizzas";

        const listingsDiv = document.createElement("div");
        listingsDiv.classList.add("listings");

        for (let i = 1; i <= 4; i++) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
    
            const leftDiv = document.createElement("div");
            leftDiv.classList.add("left");
    
            const img = document.createElement("img");
            img.src = pizzaImg;
            img.alt = "Pizza";
    
            const rightDiv = document.createElement("div");
            rightDiv.classList.add("right");
    
            const itemTitle = document.createElement("h2");
            itemTitle.textContent = "Pizza Carrée";
    
            const itemIngredient = document.createElement("h3");
            itemIngredient.textContent = "Ingredients:";
    
            const ingredients = document.createElement("p");
            ingredients.textContent = "Rass lhanout, El korkom, Skenjbir, Sketchup, 7aba les eclaires";
    
            rightDiv.append(itemTitle, itemIngredient, ingredients);
            leftDiv.appendChild(img);
    
            itemDiv.append(leftDiv, rightDiv);
    
            listingsDiv.appendChild(itemDiv);
    
            categoryDiv.append(categoryTitle, listingsDiv);
    
            contentDiv.appendChild(categoryDiv);
        }

    })()


    const sandwichCat = (function () {

        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
    
        const categoryTitle = document.createElement("h1");
        categoryTitle.textContent = "Sandwiches";

        const listingsDiv = document.createElement("div");
        listingsDiv.classList.add("listings");

        for (let i = 1; i <= 4; i++) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
    
            const leftDiv = document.createElement("div");
            leftDiv.classList.add("left");
    
            const img = document.createElement("img");
            img.src = sandwichImg;
            img.alt = "Sandwich";
    
            const rightDiv = document.createElement("div");
            rightDiv.classList.add("right");
    
            const itemTitle = document.createElement("h2");
            itemTitle.textContent = "Sandwich Jumbo";
    
            const itemIngredient = document.createElement("h3");
            itemIngredient.textContent = "Ingredients:";
    
            const ingredients = document.createElement("p");
            ingredients.textContent = "Frittes omlettes bel baydh, Google Earth, El 9oraydiss, Mahrez";
    
            rightDiv.append(itemTitle, itemIngredient, ingredients);
            leftDiv.appendChild(img);
    
            itemDiv.append(leftDiv, rightDiv);
    
            listingsDiv.appendChild(itemDiv);
    
            categoryDiv.append(categoryTitle, listingsDiv);
    
            contentDiv.appendChild(categoryDiv);
        }

    })()
}

export {createMenu};