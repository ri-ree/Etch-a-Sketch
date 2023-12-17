const container = document.querySelector('#maindiv');
const btn = document.querySelector('#button');

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}


    for (let i = 0; i < 16; i++) {
    const divs = document.createElement('div');
    divs.className = "divs";
    divs.style.border = '2px solid black';
    divs.style.height = '100px';
    divs.style.width = '100px';
    divs.addEventListener("mouseover", () => {
        divs.style.background = 'red';
    });
    container.appendChild(divs);
    };



    btn.addEventListener('click', () => {
        clearBox("maindiv");
        const input = Number(prompt("Choose a number of square per side. (PS: The limit is 100)"));
        for (j = 0; j < input; j++) {
        const newdivs = document.createElement('div');
        newdivs.className = "newdivs";
        newdivs.style.border = '2px solid black';
        newdivs.style.flexGrow = 1;
        newdivs.addEventListener("mouseover", () => {
            newdivs.style.background = 'red';
        });
        container.appendChild(newdivs);
        };
    });
