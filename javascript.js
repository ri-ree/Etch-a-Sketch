const container = document.querySelector('#maindiv');
const btn = document.querySelector('#button');


function emptyDiv(divId) {
    document.getElementById(divId).innerHTML = "";
};

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

btn.addEventListener('click', () => {
    emptyDiv("maindiv");
    const input = Number(prompt("Choose a number of square per size. (PS: The limit is 100)"));
    for (let k = 0; k < input && k <= 99; k++) {
        let theRows = document.createElement('div');
        if (k % input == 0) {
        theRows.style.marginTop = k * (500 / input) + "px";
            };
        for (let l = 0; l < input && l <= 99; l++) {
            let theMultipleRows = document.createElement('div');
            theMultipleRows.classList.add("theRows");
            theMultipleRows.style.border = "1px solid black";
            theMultipleRows.style.height = 500 / input + "px";
            theMultipleRows.style.width = 500 / input + "px";
            theMultipleRows.style.boxSizing = "border-box";
            theMultipleRows.style.flex = 1;
            theMultipleRows.addEventListener("mouseover", () => {
                theMultipleRows.style.background = 'red';
                });
            theRows.appendChild(theMultipleRows);
            };
        container.appendChild(theRows);
        };
});