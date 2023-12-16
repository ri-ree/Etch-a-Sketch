const container = document.querySelector('#maindiv');

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
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