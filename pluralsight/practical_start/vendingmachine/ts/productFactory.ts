/// <reference path="./product.ts" />

class productFactory {
    static GetProduct(): IProduct {
        let random = Math.floor(Math.random() * 5);
        switch(random){
            case 0: return new CocaCola();
            case 1: return new Mints();
            case 2: return new Gummies();
            case 3: return new Hersey();
            case 4: return new MilkyWay();
        }
    }
}