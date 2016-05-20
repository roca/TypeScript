import { Category } from "./enum";

interface IBook {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamage?: DamagedLogger;
}

interface DamagedLogger {
  (reason: string): void;
}

export { IBook, DamagedLogger };
