import { Category } from "./enum";
import { IBook, DamagedLogger } from "./interfaces";

function GetAllBooks(): Array<IBook> {
  let books = [
    { id: 1, title: "Ulsses", author: "James Joyce", available: true, category: Category.Fiction },
    { id: 2, title: "Farewell to Arms", author: "Ernest Hemingway", available: false, category: Category.Fiction },
    { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry },
    { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction},
  ];

  return books;
}


function LogFirstAvailable(books = GetAllBooks()): void {

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

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {

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

function GetBookById(id: number): IBook {
  const allBooks = GetAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
  return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string) {
  console.log("Creating customer " + name);
  if (age) {
    console.log("Age: " + age);
  }

  if (city) {
    console.log("City: " + city);
  }
}


function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {

  console.log("Checking out books for " + customer);

  let booksCheckoutedOut: string[] = [];

  for ( let id of bookIDs) {
    let book = GetBookById(id);
    if (book.available) {
      booksCheckoutedOut.push(book.title);
    }
  }

  return booksCheckoutedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookPropery: any): string[] {

  const byAuthor = (book) => {
    return book.author === bookPropery ;
  };
  const byAvailable = (book) => {
    return book.available === bookPropery;
  };

  const filterBy = { "string" : byAuthor, "boolean": byAvailable};

  return  GetAllBooks().
          filter( filterBy[typeof bookPropery] ).
          map(book => book.title);
}


function PrintBook(book: IBook): void {
  console.log(book.title + " by " + book.author);
}
// *******************************************************

let myBook: IBook = {
  id: 6,
  title: "Pride and Predjudice",
  author: "Jane Austen",
  available: true,
  category: Category.Fiction, // Extra comma okay!
  pages: 250,
  markDamage: (reason: string) => console.log("Damaged: " + reason),
};

// PrintBook(myBook);
// myBook.markDamage("torn pages");

let logDamage: DamagedLogger;
logDamage = (damage: string) => console.log("Damag report: " + damage);
logDamage("coffee stains");


// let checkedOutBooks = GetTitles(false);
// checkedOutBooks.forEach(title => console.log(title));

// let myBooks: string[] = CheckoutBooks("Thorne", 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// LogFirstAvailable();

// let fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));

// CreateCustomer("Michelle");
// CreateCustomer("Leigh", 6);
// CreateCustomer("Marie", 12, "Atlanta");

// let x: number;
// x = 6;
//
// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = (name: string, id: number) => { return id + name; };
//
// let myID: string = IdGenerator("daniel", x);
// console.log(myID);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + " = " + val));
