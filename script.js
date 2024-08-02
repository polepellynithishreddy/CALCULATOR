// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'ERROR') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText) || 'ERROR';
    } catch {
        display.innerText = 'ERROR';
    }
}
