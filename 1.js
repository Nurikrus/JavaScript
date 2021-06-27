'use strict';

let i;
for (i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(i + " - это ноль")
    } else {
        switch (i % 2) {
            case 1:
                console.log(i + " - это нечетное число");
                break;
            case 0:
                console.log(i + " - это четное число");
                break;
        }
    }
}