// get buttons and span

const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');
const span = document.getElementById('value');

// initial counter
let spanCounter = 0;

// if (spanCounter > 0) {
//     span.style.color = 'green';
// } else if (spanCounter < 0) {
//     span.style.color = 'red';
// } else{
//     span.style.color - 'black';
// }

btnDecrease.addEventListener('click', decreaseNum);
btnReset.addEventListener('click', resetNum);
btnIncrease.addEventListener('click', increaseNum);

function decreaseNum(){
    spanCounter -= 1;
    span.textContent = spanCounter;
}

function resetNum() {
    spanCounter = 0;
    span.textContent = spanCounter;
}


function increaseNum() {
    spanCounter += 1;
    span.textContent = spanCounter;
}


