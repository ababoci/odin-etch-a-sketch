container = document.querySelector(".container")

colorSelector = document.querySelector("#penColor")

function changeColor(gridBlock) {
    gridBlock.style.backgroundColor = colorSelector.value;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        new_div = document.createElement("div");
        new_div.classList.add("grid");
        container.append(new_div);
    }
    
    gridBlocks = document.querySelectorAll(".grid")
    
    gridBlocks.forEach((gridBlock) => {

        gridBlock.style.flexBasis = `${100/gridSize}%`;
    
        gridBlock.addEventListener('mouseover', (event) => {
            changeColor(gridBlock);
    
        })
    })

}


redefineAreaButton = document.querySelector(".redefineAreaButton")

redefineAreaButton.addEventListener('click', (event) => {
    const gridSize = prompt("Please enter the number of pixels for each side of the square grid (max is 100).");
    if (!(gridSize > 0)) return;

    if (gridSize > 100) gridSize = 100;

    container.innerHTML = '';

    createGrid(gridSize);
})

clearButton = document.querySelector(".clearButton")

clearButton.addEventListener("click", event => {
    gridBlocks = document.querySelectorAll(".grid")
    
    gridBlocks.forEach((gridBlock) => {
        gridBlock.style.backgroundColor = 'rgb(255, 250, 182)';
    })
})



createGrid(16);