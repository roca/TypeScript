import { Category } from "./enum";

interface IBook {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamage?: IDamagedLogger;
}

interface IDamagedLogger {
  (reason: string): void;
}

interface IPerson {
  name: string;
  email: string;
}

interface IAuthor extends IPerson {
  numBooksPublished: number;
}

interface ILibrarian extends IPerson {
  department: string;
  assistCustomer: (custName: string) => void;
}
export { IBook, IDamagedLogger, IAuthor, ILibrarian };
