const container = document.querySelector("#container");

for(let i = 1; i<=256; i++){
    const div = document.createElement("div");
    container.appendChild(div);
    div.addEventListener("mouseenter", (event) => {
        div.classList.add("hovered");
    });
}
