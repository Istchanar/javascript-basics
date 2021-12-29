"use strict";

/*
6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
*/

var xString = `x`;

for(let i = 0; i < 21; i++){
    console.log(i, xString);
    xString += `x`;
}