function generateGrid(size) {
    const mainContainer = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        let containerDiv = document.createElement("div");
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            containerDiv.appendChild(div);
        }
        mainContainer.appendChild(containerDiv);
    }
}

generateGrid(16);