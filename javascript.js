// Creating a default Grid
createGrid(16);

//Variables for Buttons
const eraseDrawingButton = document.querySelector("#eraser");
const newGridButton = document.querySelector("#new-grid");

//Eventlistener for Buttons 
eraseDrawingButton.addEventListener("click", eraseDrawing);
newGridButton.addEventListener("click", () => {
    let numOfSquares = parseInt(prompt("How many squares would you like? Put in a number between 1 and 100.", 16));
    if ((numOfSquares <= 100) && (numOfSquares > 0)) {
        numOfSquares = numOfSquares;
    } else {
        alert("Error, you put in a invalid number. Please put in a number between 1 and 100.");
        numOfSquares = parseInt(prompt("How many squares would you like? Put in a number between 1 and 100.", 16)); 
    }
    createGrid(numOfSquares);
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
        square.style.removeProperty('background-color');
        square.style.removeProperty('opacity');
    });
}

function addListenersToSquares() {
    //Variable to get the divs for coloring them
    const squares = document.querySelectorAll(".square");

    //EventListener for Hovering the Squares
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            let currentOpacity = square.style.opacity;
            square.style.backgroundColor = randomRGB();
            
            if(currentOpacity >= 1) {
                square.style.opacity = 1
            } else if (currentOpacity) {
                square.style.opacity = Number(currentOpacity) + 0.1
            }
            else {
                square.style.opacity = 0.1;
            }
        });
    });
}

//Function to get a Random RGB (https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript)
function randomRGB() {
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
return rgb;
};