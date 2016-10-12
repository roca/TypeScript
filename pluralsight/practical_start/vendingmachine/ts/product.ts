import * as categories from "./productCategory"
export interface IProduct{
    name: string;
    price: number;
    category?: categories.ProductCategory;
}

export class Initial implements IProduct {
    name = "Please select a product";
    price = 0;
}

export class CocaCola implements IProduct {
    name = "Coca-Cola";
    price = 2.30;
    category = new categories.SodaCategory();
}
export class Mints implements IProduct {
    name = "Mints";
    price = 1.30;
    category = new categories.CandyCategory();
}
export class Gummies implements IProduct {
    name = "Gummies";
    price = 1.00;
    category = new categories.CandyCategory();
}
export class Hersey implements IProduct {
    name = "Hersey's";
    price = 1.30;
    category = new categories.CandyBarCategory();
}
export class MilkyWay implements IProduct {
    name = "Milky Way";
    price = 1.80;
    category = new categories.CandyBarCategory();
}