"use strict";
/*
Программа должна спросить у пользователя число, это будет количество денег, которое
он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
*/


let moneyValue = prompt(`Введите число рублей для зачисления на счёт: `)
alert(`Ваша сумма в ${moneyValue} ${wordDegree(sliceLastNumber(moneyValue))} зачислена`);

function wordDegree(symbol){
    switch(true){
        case ["1"].includes(symbol):
            return `рубль`;
        case ["2", "3", "4"].includes(symbol):
            return `рубля`;
        case ["0", "5", "6", "7", "8", "9", "11", "12", "13", "14"].includes(symbol):
            return `рублей`;
        default:
            return`₽`;
    }
}

function sliceLastNumber(moneyValue){
    let symbolsArray = moneyValue.split('');
    let lastSymbol = symbolsArray.pop();

    if(["1", "2", "3", "4"].includes(lastSymbol)){

        let preLastSymbol = symbolsArray.pop();
        if(preLastSymbol === "1"){
            
            return preLastSymbol + lastSymbol;
        }
    }
    return lastSymbol;
}