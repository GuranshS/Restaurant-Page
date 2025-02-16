export default function contact() {
    const content = document.querySelector(".content"); 
    if (document.querySelector(".container")) {
        document.querySelector(".container").remove();
    }
    const container = document.createElement("div");
    container.className = "container";
    container.textContent = "Contact Us at 900182398: Haveli@gmail.com";

    content.appendChild(container);
}