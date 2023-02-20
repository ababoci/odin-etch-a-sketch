const container = document.querySelector(".container")
const colorSelector = document.querySelector("#penColor")
const rainbowColors = document.querySelector("#rainbowColorsCheckbox")

let mousedown = false;

function changeColor(gridBlock) {
    
    if (rainbowColors.checked) {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const randomRGB = `rgb(${r},${g},${b})`; // Collect all to a css color string
    
        gridBlock.style.backgroundColor = randomRGB;
        return;
    }

    gridBlock.style.backgroundColor = colorSelector.value;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        new_div = document.createElement("div");
        new_div.classList.add("grid");
        container.append(new_div);
    }
    
    let gridBlocks = document.querySelectorAll(".grid")
    
    gridBlocks.forEach((gridBlock) => {

        gridBlock.style.flexBasis = `${100/gridSize}%`;
    
        gridBlock.addEventListener('mousedown', (event) => {
            mousedown = true;
    
        })
        gridBlock.addEventListener('mouseup', (event) => {
            mousedown = false;
    
        })
        gridBlock.addEventListener('mouseover', (event) => {
            if (mousedown === true) {
                changeColor(gridBlock);
            }
        })
    })

}

container.addEventListener('mouseleave', (event) => {
    mousedown = false;
})


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