export default function contact() {
    const content = document.querySelector(".content"); 
    if (document.querySelector(".container")) {
        document.querySelector(".container").remove();
    }
    const container = document.createElement("div");
    container.className = "container";
    
    container.innerHTML = `
        <h1>Contact Us</h1>
        <div class="contact-info">
            <p><strong>Phone:</strong> +61 2 9001 8239</p>
            <p><strong>Email:</strong> haveli@restaurant.com</p>
            <p><strong>Address:</strong> 123 Curry Lane, Sydney NSW</p>
            <p><strong>Hours:</strong> Monday-Sunday 11am - 10pm</p>
        </div>
    `;

    content.appendChild(container);
}