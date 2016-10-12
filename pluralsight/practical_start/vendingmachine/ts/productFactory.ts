import * as products from "./product";

    export default function GetProduct(): products.IProduct {
        let random = Math.floor(Math.random() * 5);
        switch(random){
            case 0: return new products.CocaCola();
            case 1: return new products.Mints();
            case 2: return new products.Gummies();
            case 3: return new products.Hersey();
            case 4: return new products.MilkyWay();
        }
    }