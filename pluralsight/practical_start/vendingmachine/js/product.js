define(["require", "exports", "./productCategory"], function (require, exports, categories) {
    "use strict";
    var Initial = (function () {
        function Initial() {
            this.name = "Please select a product";
            this.price = 0;
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var CocaCola = (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 2.30;
            this.category = new categories.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Mints = (function () {
        function Mints() {
            this.name = "Mints";
            this.price = 1.30;
            this.category = new categories.CandyCategory();
        }
        return Mints;
    }());
    exports.Mints = Mints;
    var Gummies = (function () {
        function Gummies() {
            this.name = "Gummies";
            this.price = 1.00;
            this.category = new categories.CandyCategory();
        }
        return Gummies;
    }());
    exports.Gummies = Gummies;
    var Hersey = (function () {
        function Hersey() {
            this.name = "Hersey's";
            this.price = 1.30;
            this.category = new categories.CandyBarCategory();
        }
        return Hersey;
    }());
    exports.Hersey = Hersey;
    var MilkyWay = (function () {
        function MilkyWay() {
            this.name = "Milky Way";
            this.price = 1.80;
            this.category = new categories.CandyBarCategory();
        }
        return MilkyWay;
    }());
    exports.MilkyWay = MilkyWay;
});
//# sourceMappingURL=product.js.map