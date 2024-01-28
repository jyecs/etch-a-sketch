const BOARD_SIZE = 900;

function generateGrid(size) {
    const mainContainer = document.querySelector(".container");
        
    for (let i = 0; i < size; i++) {
        let containerDiv = document.createElement("div");
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            const sizeOfDiv = Math.floor(BOARD_SIZE / size);
            div.style.width = `${sizeOfDiv}px`;
            div.style.height = `${sizeOfDiv}px`;
            containerDiv.appendChild(div);
        }
        mainContainer.appendChild(containerDiv);
    }
}


generateGrid(16);