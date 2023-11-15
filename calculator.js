/* writing a simple calculator */

let firstNumber = Number(prompt("Enter a number"));
let secondNumber = Number(prompt("Enter a second number"));
let operator = prompt("Choose an operator(+, -, /, *)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operator) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);
