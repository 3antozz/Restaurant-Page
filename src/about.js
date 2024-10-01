import chefImg from "./about.jpg";

const createAbout = function () {
    const contentDiv = document.querySelector("#content");
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");

    const img = document.createElement("img");
    img.src = chefImg;
    img.alt = "Chef";

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("about-right");

    const whoHeader = document.createElement("h1");
    whoHeader.innerHTML = "Who are We";

    const para = document.createElement("p");
    para.innerHTML = "Founded in 2010 by a group of bastards, <em>EL&nbsp;&nbsp;&nbsp;3ANTOCCINO</em> started as a Garantita place, then became Mhajeb pioneers, then they started selling drugs, which helped them become this fancy restaurant!";

    const chefsHeader = document.createElement("h1");
    chefsHeader.innerHTML = "Leader Chefs";

    const firstChef = document.createElement("h2");
    firstChef.innerHTML = "<em>Meriem Belahadji</em>: Spaghetti Maestro";

    const secondChef = document.createElement("h2");
    secondChef.innerHTML = "<em>Yacine Djeddi</em>: Escalope Nachef expert";

    const thirdChef = document.createElement("h2");
    thirdChef.innerHTML = "<em>Rafik Ben3issa</em>: Master 2 in Ma9aron bel Créme Fraiche";

    const contactInfo = document.createElement("h1");
    contactInfo.innerHTML = "Contact Info";

    const location = document.createElement("h2");
    location.innerHTML = "<em>Location</em>: Zen9et El Mba3rine, Tikerbabine, Alger.";

    const phone = document.createElement("h2");
    phone.innerHTML = "<em>Phone Number</em>: +213 987 54 53 54";

    const workHours = document.createElement("h2");
    workHours.innerHTML = "<em>Work Hours</em>: 10:00 to 10:01";

    rightDiv.append(whoHeader, para, chefsHeader, firstChef, secondChef, thirdChef, contactInfo, location, phone, workHours);

    aboutDiv.append(img, rightDiv);

    contentDiv.appendChild(aboutDiv);
}



export {createAbout}