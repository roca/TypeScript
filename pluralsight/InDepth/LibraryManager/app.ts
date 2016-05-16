function GetAllBooks() {
  let books = [
    { title: "Ulsses", author: "James Joyce", available: true, category: Category.Fiction },
    { title: "Farewell to Arms", author: "Ernest Hemingway", available: false, category: Category.Fiction },
    { title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry },
    {title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction},
  ];

  return books;
}


function LogFirstAvailable(books): void {

    let numberOfBooks: number = books.length;
    let firstAvailable: string = "";

    for (let currentBook of books) {

        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log("Total Books: " + numberOfBooks);
    console.log("First Available: " + firstAvailable);
}

enum Category { Biography, Poetry, Fiction, History, Children }

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {

  console.log("Getting books in category: " + categoryFilter);

  const allBooks = GetAllBooks();

  return allBooks.
  filter( book => book.category === categoryFilter ).
  map( book => book.title );

}
const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
