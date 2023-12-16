const container = document.querySelector('#maindiv');

for (let i = 0; i < 16; i++) {
    const divs = document.createElement('div');
    divs.className = "divs";
    divs.style.border = '2px solid pink';
    divs.style.padding = '50px';
    container.appendChild(divs);
}