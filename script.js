const add = a => a.reduce((a, b) => a + b);
const subtract = a => a.reduce((a, b) => a - b);
const multiply = a => a.reduce((a, b) => a * b);
const divide = a => a.reduce((a, b) => a / b);

function operate(operator, nums) {
    switch (operator) {
        case '+': return add(nums);
        case '-': return subtract(nums);
        case '*': return multiply(nums);
        case '/': return divide(nums);
        default: return 'Incorrect Input!';
    }
}

console.log('Add: ' + operate('+', [10, 22])); // 32
console.log('Subtract: ' + operate('-', [100, 22])); // 78
console.log('Multiply: ' + operate('*', [10, 10])); // 100
console.log('Divide: ' + operate('/', [55, 11])); // 5
console.log('Incorrect: ' + operate('%', [19, 2]));