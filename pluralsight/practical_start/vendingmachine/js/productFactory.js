define(["require", "exports", "./product"], function (require, exports, products) {
    "use strict";
    function GetProduct() {
        var random = Math.floor(Math.random() * 5);
        switch (random) {
            case 0: return new products.CocaCola();
            case 1: return new products.Mints();
            case 2: return new products.Gummies();
            case 3: return new products.Hersey();
            case 4: return new products.MilkyWay();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GetProduct;
});
//# sourceMappingURL=productFactory.js.map