const container = document.querySelector('#maindiv');
const btn = document.querySelector('#button');


function newGrid(size) {
    for (let i = 0; i < size; i++) {
    let allRows = document.createElement('div');
    if (i % size == 0) {
    allRows.style.marginTop = i * (500 / size) + "px";
        };
    for (let j = 0; j < size; j++) {
        let multiplerows = document.createElement('div');
        multiplerows.classList.add("rows");
        multiplerows.style.border = "1px solid blue";
        multiplerows.style.height = 500 / size + "px";
        multiplerows.style.width = 500 / size + "px";
        multiplerows.style.boxSizing = "border-box";
        multiplerows.style.flex = 1;
        allRows.appendChild(multiplerows);
        };
    container.appendChild(allRows);
    };
};

newGrid(16);