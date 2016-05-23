import { IBook, IDamageLogger, IAuthor, ILibrarian } from "./interfaces";

class UniversityLibrarian implements ILibrarian {

  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string) {
    console.log(this.name + " is assisting " + custName);
  }
}

export { UniversityLibrarian };
