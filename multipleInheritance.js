function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.books.push(this);
}

Book.prototype = {
    read : function(){
     return "Author for "+this.title+" is "+this.author;
    },
    books : []
}

function EBook(title, author, pages, fileSize){
    Book.call(this, title, author, pages);
    this.fileSize = fileSize;
}
EBook.prototype = new Book();
EBook.prototype.download = function(){
    return "Download file " + this.title + this.fileSize;
}

function Paperback(title, author, pages, cover){
    Book.call(this, title, author, pages);
    this.cover = cover;
    //cover is of type String
}
Paperback.prototype = new Book();
Paperback.prototype.burn = function(){
    return "burn file " + this.title ;
}

var b1 = new Book('Javascript','john',280);
b1.read();
var ebook1 = new EBook('AngularJs','kevin',310, 40);
ebook1.read();
var pb1 = new Paperback('ReactJs','nick',260,'knfkjf');
pb1.read();
