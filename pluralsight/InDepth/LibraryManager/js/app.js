"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var enum_1 = require("./enum");
var class_1 = require("./class");
function GetAllBooks() {
    var books = [
        { id: 1, title: "Ulsses", author: "James Joyce", available: true, category: enum_1.Category.Fiction },
        { id: 2, title: "Farewell to Arms", author: "Ernest Hemingway", available: false, category: enum_1.Category.Fiction },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: enum_1.Category.Poetry },
        { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: enum_1.Category.Fiction },
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
    console.log("First Available: " + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enum_1.Category.Fiction; }
    console.log("Getting books in category: " + enum_1.Category[categoryFilter]);
    return GetAllBooks().
        filter(function (book) { return book.category === categoryFilter; }).
        map(function (book) { return book.title; });
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log("Creating customer " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log("Checking out books for " + customer);
    var booksCheckoutedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            booksCheckoutedOut.push(book.title);
        }
    }
    return booksCheckoutedOut;
}
function GetTitles(bookPropery) {
    var byAuthor = function (book) {
        return book.author === bookPropery;
    };
    var byAvailable = function (book) {
        return book.available === bookPropery;
    };
    var filterBy = { "string": byAuthor, "boolean": byAvailable };
    return GetAllBooks().
        filter(filterBy[typeof bookPropery]).
        map(function (book) { return book.title; });
}
function PrintBook(book) {
    console.log(book.title + " by " + book.author);
}
var Newspaper = (function (_super) {
    __extends(class_2, _super);
    function class_2() {
        _super.apply(this, arguments);
    }
    class_2.prototype.printCitation = function () {
        console.log("Newspaper: " + this.title);
    };
    return class_2;
}(class_1.ReferenceItem));
var myPaper = new Newspaper("The Gazette", 2016);
myPaper.printCitation();
var Novel = (function (_super) {
    __extends(Novel, _super);
    function Novel() {
        _super.apply(this, arguments);
    }
    return Novel;
}((function () {
    function class_3() {
        this.title = "Dune";
    }
    return class_3;
}())));
var favoriteNovel = new Novel();
console.log(favoriteNovel.title);
//# sourceMappingURL=app.js.map