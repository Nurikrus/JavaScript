'use strict';

// представление ES5

//function Post(author, text, date) {
//    this.author = author;
//    this.text = text;
//    this.date = date;
//};

//Post.prototype.edit = function (text) {
//    return this.text = text;
//};

//function AttachedPost(author, text, date, highlighted) {
//    Post.call(this, author, text, date);
//    this.highlighted = false;
//};

//AttachedPost.prototype = Object.create(Post.prototype);
//AttachedPost.prototype.constructor = AttachedPost;

//AttachedPost.prototype.makeTextHighlighted = function () {
//    return this.highlighted = true;
//};

//let AttachedPost1 = new AttachedPost('Anna', 'hellow', '25 desember');
//AttachedPost1.edit('hello world');
//AttachedPost1.makeTextHighlighted();
//console.log(AttachedPost1);

// представление ES6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        return this.text = text;
    }
};

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        return this.highlighted = true;
    }
};

let AttachedPost1 = new AttachedPost('Jane', 'hellowin', '31 november');
AttachedPost1.edit('scary hell');
AttachedPost1.makeTextHighlighted();
console.log(AttachedPost1);