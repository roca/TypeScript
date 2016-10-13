var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var imagePath = "img/";
    var Coin = (function () {
        function Coin(value, imageFile) {
            this.value = value;
            this.imageFile = imageFile;
        }
        Object.defineProperty(Coin.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Coin.prototype.getImageUrl = function () {
            return imagePath + this.imageFile;
        };
        return Coin;
    }());
    exports.Coin = Coin;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            return _super.call(this, .25, "Quarter.png") || this;
        }
        return Quarter;
    }(Coin));
    exports.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            return _super.call(this, .10, "Dime.png") || this;
        }
        return Dime;
    }(Coin));
    exports.Dime = Dime;
    var Half = (function (_super) {
        __extends(Half, _super);
        function Half() {
            return _super.call(this, .5, "Half.png") || this;
        }
        return Half;
    }(Coin));
    exports.Half = Half;
    var Dollar = (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            return _super.call(this, 1.00, "Dollar.jpg") || this;
        }
        return Dollar;
    }(Coin));
    exports.Dollar = Dollar;
});
//# sourceMappingURL=coin.js.map