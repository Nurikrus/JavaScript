'use strict';

const products1 = [
    {
        Id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let photo = products1.filter(function (foto) {
    if (foto.photos == undefined) {
        return false;
    }
    return foto.photos.length > 0;
});
console.log(photo);

products1.sort(function (a, b) {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
});
console.log(products1);
