"use strict";
/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/


let a = +prompt(`Введите число a:`);
let b = +prompt(`Введите число b:`);
let operation = prompt(`Введите операцию +, -, /, * :`);

function mathOperation(a, b, operation){
    switch(operation){
        case(`+`):
            return sumTwoNumbers(a, b);
        case(`-`):
            return minusTwoNumber(a, b);
        case(`/`):
            return divisionTwoNumber(a, b);
        case(`*`):
            return multiplicationTwoNumbers(a, b);
        default:
            return alert(`Unexpected operation.`);
    }
}

alert(mathOperation(a, b, operation));


function sumTwoNumbers(a, b){
    return a + b;
}

function minusTwoNumber (a, b){
    return a - b;
}

function divisionTwoNumber(a, b){
    return a / b;
}

function multiplicationTwoNumbers(a, b){
    return a * b;
}