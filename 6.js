"use strict";

let money = Number(prompt("Сколько хотите положить рублей?"));
let lastMoney = money % 10;
let preLastMoney = parseInt(money / 10) % 10;


function cashe(m, p, l) {
    if (p == 1) {
        alert("Ваша сумма в " + m + " рублей зачислена");
    } else {
        switch (l) {
            case 0:
                alert("Ваша сумма в " + m + " рублей зачислена");
                break;
            case 5:
                alert("Ваша сумма в " + m + " рублей зачислена");
                break;
            case 6:
                alert("Ваша сумма в " + m + " рублей зачислена");
                break;
            case 7:
                alert("Ваша сумма в " + m + " рублей зачислена");
                break;
            case 8:
                alert("Ваша сумма в " + m + " рублей зачислена");
                break;
            case 9:
                alert("Ваша сумма в " + m + " рублей зачислена");
                break;
            case 1:
                alert("Ваша сумма в " + m + " рубль зачислена");
                break;
            case 2:
                alert("Ваша сумма в " + m + " рубля зачислена");
                break;
            case 3:
                alert("Ваша сумма в " + m + " рубля зачислена");
                break;
            case 4:
                alert("Ваша сумма в " + m + " рубля зачислена");
                break;
        }
    }
}

if (isNaN(money)) {
    alert("Вы ввели не сумму которую хотите зачислить,а белиберду!!!");
} else {
    cashe(money, preLastMoney, lastMoney);
}
