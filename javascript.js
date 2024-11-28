// Creating a default Grid
createGrid(16);

//Variables for Buttons
const eraseDrawingButton = document.querySelector("#eraser");
const newGridButton = document.querySelector("#new-grid");

//Eventlistener for Buttons 
eraseDrawingButton.addEventListener("click", eraseDrawing);
newGridButton.addEventListener("click", () => {
    let numOfSquares = parseInt(prompt("How many squares would you like? Put in a number between 1 and 100.", 16));
    if ((numOfSquares <= 100) && (numOfSquares > 10)) {
        createGrid(numOfSquares);
    } else {
        alert("Error, you put in a invalid number. Please put in a number between 1 and 100.");
        numOfSquares = parseInt(prompt("How many squares would you like? Put in a number between 1 and 100.", 16));
    }
});

//Function to create a grid of suqares for the sketchpad
function createGrid(numOfSquares) {

    const container = document.querySelector(".container");
    clearContainer();

    for (let i = 1; i <= numOfSquares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        createSquares(row, numOfSquares);
    }

    addListenersToSquares();

    //Function to create the squares for the rows
    function createSquares(forDiv, num) {
        for (let i = 1; i <= num; i++) {
            const div = document.createElement("div");
            div.classList.add("square");
            forDiv.appendChild(div);
        }
    }

    //Function to empty the container before populating it again
    function clearContainer() {
        container.replaceChildren();
    }

} // end function createGrid

//Function, to empty the grid to start drawing again on the same grid
function eraseDrawing() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

function addListenersToSquares() {
    //Variable to get the divs for coloring them
    const squares = document.querySelectorAll(".square");

    //EventListener for Hovering the Squares
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
    });
}