let container = document.querySelector('.container');

let button = document.querySelector('button');
button.onclick = () => {
    container.innerHTML = '';
    let size = prompt('Please enter the size of the board');
    let boxDimensions = 600/size;
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.setAttribute('style', 'float: left; border: solid 1px black; width: ' + boxDimensions + 'px; height: ' + boxDimensions + 'px; box-sizing: border-box;');
            box.onmouseover = () => {
                box.style.background = 'blue';
            }
            container.appendChild(box);
        }
    }
}