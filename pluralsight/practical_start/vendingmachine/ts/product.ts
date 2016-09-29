/// <reference path="./productCategory.ts" />
interface IProduct{
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements IProduct {
    name = "Please select a product";
    price = 0;
}

class CocaCola implements IProduct {
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategory();
}
class Mints implements IProduct {
    name = "Mints";
    price = 1.30;
    category = new CandyCategory();
}
class Gummies implements IProduct {
    name = "Gummies";
    price = 1.00;
    category = new CandyCategory();
}
class Hersey implements IProduct {
    name = "Hersey's";
    price = 1.30;
    category = new CandyBarCategory();
}
class MilkyWay implements IProduct {
    name = "Milky Way";
    price = 1.80;
    category = new CandyBarCategory();
}