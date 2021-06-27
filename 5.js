'use strict';

i = 0;
for (i; logout(i); i++) { };

function logout(a) {
    console.log(a);
    return a < 9;
}