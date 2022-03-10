// const firstValue = parseInt(prompt("Your first value"));
// const operator = prompt("Your operator");
// const secondValue = parseInt(prompt("Your second value"));

function simpleCalculator(firstValue = parseInt(prompt("Your first value")), operator = prompt("Your operator"), secondValue = parseInt(prompt("Your second value"))) {

    switch(operator){
        case "+":
            console.log(firstValue + secondValue);
            break;
        case "-":
            console.log(firstValue - secondValue);
            break;
        case "*":
            console.log(firstValue * secondValue);
            break;
        case "/":
            console.log(firstValue / secondValue);
            break;
        case "%":
            console.log(firstValue % secondValue);
            break;
        default:
            console.log("Invalid operator");
            break;
    }

}

simpleCalculator()

// if (operator === "+") {
//     console.log(firstValue + secondValue);
// }
// else if (operator === "-") {
//     console.log(firstValue - secondValue);
// }
// else if (operator === "*") {
//     console.log(firstValue * secondValue);
// }
// else if (operator === "/") {
//     console.log(firstValue / secondValue);
// }
// else if (operator === "%") {
//     console.log(firstValue % secondValue);
// }
// else {
//     "Invalid operator"
// }

