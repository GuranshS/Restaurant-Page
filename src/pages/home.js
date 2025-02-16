import tableImage from "../assets/table.jpg";

export default function home() {
    const content = document.querySelector(".content"); 
    if (document.querySelector(".container")) {
        document.querySelector(".container").remove();
    }

   


    
    //Creates the main div where evrything is to be stored
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = "<h1> Authentic Indian Cuisine</h1><p>Welcome to Haveli Indian Restaurant, a hidden gem tucked away in the heart of Sydney! Phulkari encapsulates the vibrant, warm spirit of India through its tantalising culinary creations and immersive dining experience.</p>";

    content.appendChild(container);
    
    const image = document.createElement("img");
    image.src = tableImage;
    container.appendChild(image);
}
