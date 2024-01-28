const BOARD_SIZE = 900;

function generateGrid(size) {
    const mainContainer = document.querySelector(".container");
    mainContainer.replaceChildren();
        
    for (let i = 0; i < size; i++) {
        let containerDiv = document.createElement("div");
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            const sizeOfDiv = Math.floor(BOARD_SIZE / size);
            div.style.width = `${sizeOfDiv}px`;
            div.style.height = `${sizeOfDiv}px`;
            div.addEventListener("mouseover", (e)=>{
                e.target.style.backgroundColor = "red";
            });
            containerDiv.appendChild(div);
        }
        mainContainer.appendChild(containerDiv);
    }
}

function generateNewGrid() {
    let size = parseInt(prompt("What woud you like the size of the grid to be?", "16"));
    generateGrid(size);
}



document.querySelector("button").addEventListener("click", ()=>{
    generateNewGrid();
});
generateGrid(16);