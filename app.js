// get buttons and span

const buttons = document.querySelectorAll('.btn');
const span = document.getElementById('value');

// initial counter
let spanCounter = 0;

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList;

        if (btnClass.contains('decrease')){
            spanCounter --;
        }
        else if(btnClass.contains('increase')){
            spanCounter ++;
        } 
        else{
            spanCounter = 0;
        }

        span.textContent = spanCounter;

        if (spanCounter > 0) {
            span.style.color = 'green';
        } else if (spanCounter < 0){
            span.style.color = 'red'
        } else {
            span.style.color = 'hsl(209, 61% , 16% )';
        }

    });
})


