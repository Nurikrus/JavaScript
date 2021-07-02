'use strict';


// представление ES5

//function product(name, price) {
//    this.name = name;
//    this.price = price;
//};

//product.prototype.make25PersentDiscount = function () {
//    return this.price = this.price - (this.price / 100) * 25;
//};

//let product1 = new product('orange', 100);
//product1.make25PersentDiscount();
//console.log(product1);

// представление ES6

class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PersentDiscount() {
        return this.price = this.price - (this.price / 100) * 25;
    }
};

let product1 = new product('orange', 100);
product1.make25PersentDiscount();
console.log(product1);