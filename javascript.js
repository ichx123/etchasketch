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

createGrid(16);