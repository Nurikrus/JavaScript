"use strict";

let money = Number(prompt("Сколько хотите положить рублей?"));
let lastMoney = money % 10;

switch (lastMoney) {
    case 0:
        alert("Ваша сумма в " + money + " рублей зачислена");
        break;
    case 5:
        alert("Ваша сумма в " + money + " рублей зачислена");
        break;
    case 6:
        alert("Ваша сумма в " + money + " рублей зачислена");
        break;
    case 7:
        alert("Ваша сумма в " + money + " рублей зачислена");
        break;
    case 8:
        alert("Ваша сумма в " + money + " рублей зачислена");
        break;
    case 9:
        alert("Ваша сумма в " + money + " рублей зачислена");
        break;
    case 1:
        alert("Ваша сумма в " + money + " рубль зачислена");
        break;
    case 2:
        alert("Ваша сумма в " + money + " рубля зачислена");
        break;
    case 3:
        alert("Ваша сумма в " + money + " рубля зачислена");
        break;
    case 4:
        alert("Ваша сумма в " + money + " рубля зачислена");
        break;
}
