const container = document.querySelector('#maindiv');
const btn = document.querySelector('#button');


function newGrid(size) {
    for (let i = 0; i < size; i++) {
    let allRows = document.createElement('div');
    if (i % size == 0) {
    allRows.style.marginTop = i * (500 / size) + "px";
        };
    for (let j = 0; j < size; j++) {
        let multipleRows = document.createElement('div');
        multipleRows.classList.add("rows");
        multipleRows.style.border = "1px solid black";
        multipleRows.style.height = 500 / size + "px";
        multipleRows.style.width = 500 / size + "px";
        multipleRows.style.boxSizing = "border-box";
        multipleRows.style.flex = 1;
        multipleRows.addEventListener("mouseover", () => {
            multipleRows.style.background = 'red';
            });
        allRows.appendChild(multipleRows);
        };
    container.appendChild(allRows);
    };
};

newGrid(16);