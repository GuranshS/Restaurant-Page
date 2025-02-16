import home from './pages/home.js';
import contact from './pages/contact.js';
import menu from './pages/menu.js';

console.log('Hello, world!');
home();

function switchPage(page) {
    if (page === "home") {
        home();
    } else if (page === "menu") {
        menu();
    }
    else if (page === "contact") {
        contact();
    }
}

document.querySelector(".home").addEventListener("click", () => switchPage("home"));
document.querySelector(".menu").addEventListener("click",() => switchPage("menu"));
document.querySelector(".contact").addEventListener("click",() => switchPage("contact"));