'use strict';

let userNumber = Number(prompt("Введите число от 0 до 999"));
let unit = null;
let ten = null;
let hungred = null;
let thousands = parseInt(userNumber / 1000);

function objects(units, tens, hungreds) {
    this.units = units;
    this.tens = tens;
    this.hungreds = hungreds;
}

if (isNaN(userNumber)) {
    objects.units = unit;
    objects.tens = ten;
    objects.hungreds = hungred;
    console.log("Вы ввели не число!!!");
    console.error(object);
}

if (!Number.isInteger(userNumber)) {
    objects.units = unit;
    objects.tens = ten;
    objects.hungreds = hungred;
    console.log("Вы ввели не целое число!!!");
    console.error(object);
}

if (thousands > 0 || userNumber < 0) {
    objects.units = unit;
    objects.tens = ten;
    objects.hungreds = hungred;
    console.log("Вы ввели число не от 0 до 999!!!");
    console.error(object);
}

/** 
возвращает количество единиц
*/
function unitNumber(a) {
    return a % 10;
}

/**  
* возвращает количество десяток
*/
function tenNumber(a) {
    return parseInt(a / 10) % 10;
}

/** 
возвращает количество сотен
*/
function hungredNumber(a) {
    return parseInt(a / 100) % 10;
}

let object = new objects(unitNumber(userNumber), tenNumber(userNumber), hungredNumber(userNumber));
console.log(object);