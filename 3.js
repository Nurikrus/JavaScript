'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let sale = 15;

function sales(price) {
    price.price = price.price - (price.price / 100 * sale)
}

products.forEach(sales);
console.log(products);