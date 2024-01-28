function generateGrid(size) {
    const container = document.querySelector(".container");
    console.log(container);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            container.appendChild(div);
        }
    }
}

generateGrid(16);