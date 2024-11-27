// Variables to store Container and it's empty Clone for setbacks
const container = document.querySelector(".container");
const clone = container.cloneNode(true);

//Function to create a grid of suqares for the sketchpad
function createGrid(numOfSquares) {

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
    container.replaceWith(clone);
}


createGrid(16);