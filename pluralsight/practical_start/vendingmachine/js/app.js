var Quater = (function () {
    function Quater() {
        this.value = .25;
    }
    Object.defineProperty(Quater.prototype, "Value", {
        get: function () {
            return .25;
        },
        enumerable: true,
        configurable: true
    });
    // set Value(newValue: number) {
    //     this.value = newValue;
    // }
    Quater.prototype.getImageUrl = function () {
        return "img/Quater.png";
    };
    return Quater;
}());
/// <reference path="./coin.ts" />
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = 0;
        this.acceptCoin = function (coin) {
            _this.paid = _this.paid + coin.Value;
            var element = document.getElementById("total");
            element.innerHTML = _this.paid.toString();
        };
    }
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
//# sourceMappingURL=app.js.map