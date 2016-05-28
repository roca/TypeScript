import { Category } from "./enum";
import { IBook, ILogger, IAuthor, ILibrarian, IMagazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./class";
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from "./lib/utilityFunctions";
import refBook from "./uncyclopedia";
import Shelf from "./shelf";
//
// let reference = new refBook("Fact Book", 2016, 1);

// let fee = CalcFee(5);
// let max = MaxBooksAllowed(12);

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

// let refBook: ReferenceItem = new Encyclopedia("WorldPedia", 1900, 10);
// refBook.printCitation();

// let Newspaper = class extends ReferenceItem {
//   printCitation(): void {
//     console.log(`Newspaper: ${this.title}`);
//   }
// };

// let myPaper = new Newspaper("The Gazette", 2016);
// myPaper.printCitation();

class Novel extends class {
  title: string;
  constructor() {
    this.title = "Dune";
  }
} {
  mainCharacter: string;
}

// let favoriteNovel = new Novel();
// console.log(favoriteNovel.title);

// let ref: ReferenceItem = new ReferenceItem("Updated Facts and Figures", 2012);
// ref.printItem();
// ref.publisher = "Radom Data Publishing";
// console.log(ref.publisher);
//
// let myBook: IBook = {
//   id: 6,
//   title: "Pride and Predjudice",
//   author: "Jane Austen",
//   available: true,
//   category: Category.Fiction, // Extra comma okay!
//   pages: 250,
//   markDamage: (reason: string) => console.log("Damaged: " + reason),
// };

// PrintBook(myBook);
// myBook.markDamage("torn pages");

// let logDamage: IDamageLogger;
// logDamage = (damage: string) => console.log("Damag report: " + damage);
// logDamage("coffee stains");


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


// let favoriteLibrarian: ILibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = "Sharon";
// favoriteLibrarian.assistCustomer("Lynda");
// let x = [{"id": 1}, {"id": -2}, {"id": 3}].find(myObj => myObj.id < 0) ;
//
// let obj = { a: 1 };
// let copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 };
let inventory: Array<IBook> = [
  { id: 10, title: "The C Programming Language", author: "K & R", available: true, category: Category.Software },
  { id: 11, title: "Code Complete", author: "Steve McConnell", available: true, category: Category.Software},
  { id: 12, title: "8-bit Graphics with Cobol", author: "A. B.", available: true, category: Category.Software },
  { id: 13, title: "Cool autoexec.bat Scripts", author: "C. D.", available: true, category: Category.Software},
];

// let purgedBooks: Array<IBook> = Purge(inventory);
// purgedBooks.forEach( book => console.log(book.title));
//
// let purgedNums: Array<number> = Purge<number>([1, 2, 3, 4]);
// console.log(purgedNums);

let bookShelf: Shelf<IBook> = new Shelf<IBook>();

inventory.forEach(book => bookShelf.add(book));

let firstBook: IBook = bookShelf.getFirst();

let magazines: Array<IMagazine> = [
  { title: "Programming Language Monthly", publisher: "Code Mags" },
  { title: "Literary Fixtion Quarterly", publisher: "College Press" },
  { title: "Five Points", publisher: "GSU"}
];

let magazineShelf: Shelf<IMagazine> = new Shelf<IMagazine>();

magazines.forEach(mag => magazineShelf.add(mag));

let firstMagazine: IMagazine = magazineShelf.getFirst();
