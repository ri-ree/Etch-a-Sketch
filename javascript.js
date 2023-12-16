const container = document.querySelector('#maindiv');

for (let i = 0; i <= 16; i++) {
    const divs = document.createElement('div');
    divs.className = "divs";
    container.appendChild(divs);
}