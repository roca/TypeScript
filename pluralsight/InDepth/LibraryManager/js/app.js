function GetAllBooks() {
    var books = [
        { title: "Ulsses", author: "James Joyce", available: true, category: Category.Fiction },
        { title: "Farewell to Arms", author: "Ernest Hemingway", available: false, category: Category.Fiction },
        { title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry },
        { title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction },
    ];
    return books;
}
function LogFirstAvailable(books) {
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function GetBookTitlesByCategory(categoryFilter) {
    console.log("Getting books in category: " + categoryFilter);
    var allBooks = GetAllBooks();
    return allBooks.
        filter(function (book) { return book.category === categoryFilter; }).
        map(function (book) { return book.title; });
}
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
//# sourceMappingURL=app.js.map