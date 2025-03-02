export default function menu() {
    const content = document.querySelector(".content"); 
    if (document.querySelector(".container")) {
        document.querySelector(".container").remove();
    }
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
    <h1>Menu</h1>
    
    <div class="menu-section">
        <h2>Starters</h2>
        <div class="menu-item">
            <span class="dish-name">Vegetable Samosa</span>
            <span class="dish-price">$6.99</span>
        </div>
        <div class="menu-item">
            <span class="dish-name">Onion Bhaji</span>
            <span class="dish-price">$5.99</span>
        </div>
    </div>
    
    <div class="menu-section">
        <h2>Main Course</h2>
        <div class="menu-item">
            <span class="dish-name">Butter Chicken</span>
            <span class="dish-price">$14.99</span>
        </div>
        <div class="menu-item">
            <span class="dish-name">Shahi Paneer</span>
            <span class="dish-price">$13.99</span>
        </div>
        <div class="menu-item">
            <span class="dish-name">Lamb Rogan Josh</span>
            <span class="dish-price">$15.99</span>
        </div>
    </div>
    
    <div class="menu-section">
        <h2>Sides</h2>
        <div class="menu-item">
            <span class="dish-name">Garlic Naan</span>
            <span class="dish-price">$3.50</span>
        </div>
        <div class="menu-item">
            <span class="dish-name">Jeera Rice</span>
            <span class="dish-price">$4.50</span>
        </div>
    </div>
`;

content.appendChild(container);
}