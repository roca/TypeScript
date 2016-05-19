function GetAllBooks() {
  let books = [
    { id: 1, title: "Ulsses", author: "James Joyce", available: true, category: Category.Fiction },
    { id: 2, title: "Farewell to Arms", author: "Ernest Hemingway", available: false, category: Category.Fiction },
    { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry },
    { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction},
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

  console.log("Getting books in category: " + Category[categoryFilter]);

  return GetAllBooks().
          filter( book => book.category === categoryFilter ).
          map( book => book.title );

}


function LogBookTitles(titles: string[]): void {

  for (let title of titles) {
      console.log(title);
  }
}

function GetBookById(id: number) {
  const allBooks = GetAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
  return name + id;
}


// ***************************************************************

let x: number;
x = 6;

let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => { return id + name; };

let myID: string = IdGenerator("daniel", x);
console.log(myID);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + " = " + val));
