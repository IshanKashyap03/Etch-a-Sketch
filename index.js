const container = document.querySelector("#container");

function makeGrid(number){
    // Clear existing grid
    container.innerHTML = '';

    // let dimension = number * number;
    for (let i = 1; i <= number; i++) {
        const row = document.createElement("div");
        container.appendChild(row);
        for(let i = 1; i<= number; i++){
            const column = document.createElement("div");
            column.className = "squares";
            row.appendChild(column);
            column.addEventListener("mouseenter", () => {
                column.classList.add("hovered");
            });
        }
    }
}


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let userInput = prompt("How many squares per side do you want?");
    let gridSize = parseInt(userInput);
    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        makeGrid(gridSize);
    } else {
        alert('Please enter a valid number between 1 and 100');
    }
});
