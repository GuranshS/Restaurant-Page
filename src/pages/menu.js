export default function menu() {
    const content = document.querySelector(".content"); 
    if (document.querySelector(".container")) {
        document.querySelector(".container").remove();
    }
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = "<h1> Menu</h1><p>Shahi Paneer</p>";


    content.appendChild(container);
}