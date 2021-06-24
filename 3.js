"use strict";

 b = Number(prompt("введите число b"));
 d = Number(prompt("введите число a"));


if (isNaN(d) && isNaN(b)) {
    console.log("вы ввели не число");
} else if (d >= 0 && b >= 0) {
    console.log("разнасть а и b равна ", (d - b));
} else if (d < 0 && b < 0) {
    console.log("произведение а и b равно ", (d * b));
} else if ((d < 0 && b >= 0) || (d >= 0 && b < 0)) {
    console.log("сумма а и b равна ", (d + b));
}