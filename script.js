let operation, ans;

const inputButtons = document.querySelectorAll('.inputs');
const operatorButtons = document.querySelectorAll('.operators');
const pointButton = document.querySelector('#point');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');
const equation = document.querySelector('#equation');
const result = document.querySelector('#result');

window.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') appendPoint();
    if (e.key === 'Delete') clear();
    if (e.key === 'Backspace') backspace();
    if (e.key === '+' || e.key === '-') setOperation(e.key);
    if (e.key === '*') setOperation('×');
    if (e.key === '/') setOperation('÷');
    if (e.key === '=' || e.key === 'Enter') equal();
});

inputButtons.forEach(input => {
        input.onclick = () => appendNumber(input.id);
});

operatorButtons.forEach(operator => {
    operator.onclick = () => setOperation(operator.id);
}); 

pointButton.onclick = () => appendPoint();

equalButton.onclick = () => equal();

clearButton.onclick = () => clear();

backspaceButton.onclick = () => backspace()

function appendNumber(digit) {
    if (equation.textContent === 'Math Error');
    else if (result.textContent !== '' && equation.textContent.split(/[\u00F7\u00D7\u002B\u002D]/).length === 2 && !equation.textContent.split(/[\u00F7\u00D7\u002B\u002D]/).includes('')) {
        clear();
        equation.textContent += digit;
    } else equation.textContent += digit;
}

function setOperation(operator) {
    if (equation.textContent === 'Math Error');
    if (result.textContent !== '') {
        result.textContent = ''
        operation = operator;
        equation.textContent = `${ans}${operation}`
    }
    else if (operation !== undefined) {
        operate(operation, equation.textContent.split(/[\u00F7\u00D7\u002B\u002D]/).map(Number));
        operation = operator;
        equation.textContent = `${ans}${operation}`
    } else {
        operation = operator;
        equation.textContent += operator;
    }
}

function appendPoint() {
    if (equation.textContent.includes('.')) {
        if (operation !== undefined) {
            var num = equation.textContent.split(/[\u00F7\u00D7\u002B\u002D]/);
            if (num[1].includes('.')) console.log(`${num[1]}`);
            else equation.textContent += '.';
        } 
    } else equation.textContent += '.';
}

function equal() {
    if (equation.textContent === 'Math Error');
    else if (operation === undefined || equation.textContent === '');
    else operate(operation, equation.textContent.split(/[\u00F7\u00D7\u002B\u002D]/).map(Number));
}

function backspace() {
    if (equation.textContent === 'Math Error');
    else if (result.textContent !== '');
    else equation.textContent = equation.textContent.slice(0, -1);
}

function clear() {
    equation.textContent = ''
    result.textContent = '';
    operation = undefined
    ans = undefined;
}

function operate(operator, nums) {
    switch (operator) {
        case '+': 
            ans = result.textContent = add(nums);
            break;
        case '-': 
            ans = result.textContent = subtract(nums);
            break;
        case '×': 
            ans = result.textContent = multiply(nums);
            break;
        case '÷': 
            ans = result.textContent = divide(nums);
            break;
    }
}

const add = a => a.reduce((a, b) => a + b);
const subtract = a => a.reduce((a, b) => a - b);
const multiply = a => a.reduce((a, b) => a * b);
const divide = a => a.reduce((a, b) => {
    if (b === 0) equation.textContent = 'Math Error';
    else return a / b;
});