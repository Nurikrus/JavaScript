"use strict";

let arg1 = +prompt("Введите первое число");
let arg2 = +prompt("Введите второе число");
let operation = prompt("Введите операцию");


function multiplication(d, b) {
    return d * b;
}

function division(d, b) {
    return d / b;
}

function addition(d, b) {
    return d + b;
}

function subtraction(d, b) {
    return d - b;
}

function mathOperation(d, b, operation) {
    switch (operation) {
        case "+":
            return addition(d, b);
        case "*":
            return multiplication(d, b);
        case "/":
            return division(d, b);
        case "-":
            return subtraction(d, b);
        case "сложение":
            return addition(d, b);
        case "умножение":
            return multiplication(d, b);
        case "деление":
            return division(d, b);
        case "вычитание":
            return subtraction(d, b);
        default:
            alert("нет такой операции");
    }
}

console.log(mathOperation(arg1, arg2, operation));