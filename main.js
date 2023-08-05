const screen = document.querySelector('.screen');
const dark = document.querySelector('.dark');


const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'clear')
        {
            display.innerText = '';
        }
        else if(display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        }
        else if(display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Null';
        }
        else {
            display.innerText +=item.id;
        }
    }
})

