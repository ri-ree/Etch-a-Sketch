const container = document.querySelector('#maindiv');

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    prompt("Choose a number of square per side. (PS: 100 is the limit)");
});

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