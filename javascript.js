// Variables to store Container and it's empty Clone for setbacks
const container = document.querySelector(".container");
const clone = container.cloneNode(true);

// Creating a default Grid
createGrid(16);

//Variables to get the divs for coloring them
const squares = document.querySelectorAll(".square");

//EventListener for Hovering the Squares
squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    });
});

//Variables for Buttons
const eraseDrawingButton = document.querySelector("#eraser");
const newGridButton = document.querySelector("#new-grid");

//Eventlistener for Buttons 
eraseDrawingButton.addEventListener("click", eraseDrawing);
newGridButton.addEventListener("click", () => {
   let numOfSquares = parseInt(prompt("How many squares would you like?", 16));
   clearContainer();
   createGrid(numOfSquares);
})

//Function to create a grid of suqares for the sketchpad
function createGrid(numOfSquares) {

    const container = document.querySelector(".container");
    
    for (let i = 1; i <= numOfSquares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        createSquares(row, numOfSquares);
    }


    function createSquares(forDiv, num) {
        for (let i = 1; i <= num; i++) {
            const div = document.createElement("div");
            div.classList.add("square");
            forDiv.appendChild(div);
        }
    } //end function createSquares
} // end function createGrid

//Function to empty the container before populating it again
function clearContainer() {
    container = container.replaceWith(clone);
}

//Function, to empty the grid to start drawing again on the same grid
function eraseDrawing() {
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}
