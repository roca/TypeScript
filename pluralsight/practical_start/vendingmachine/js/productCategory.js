var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ProductCategory = (function () {
        function ProductCategory(name, imageName) {
            this.name = name;
            this.imageName = imageName;
            this.imagePath = "img/";
        }
        ProductCategory.prototype.getImageUrl = function () {
            return this.imagePath + this.imageName;
        };
        return ProductCategory;
    }());
    exports.ProductCategory = ProductCategory;
    var SodaCategory = (function (_super) {
        __extends(SodaCategory, _super);
        function SodaCategory() {
            return _super.call(this, "Soda", "SodaCan.png") || this;
        }
        return SodaCategory;
    }(ProductCategory));
    exports.SodaCategory = SodaCategory;
    var ChipsCategory = (function (_super) {
        __extends(ChipsCategory, _super);
        function ChipsCategory() {
            return _super.call(this, "Potato Chips", "Chips.png") || this;
        }
        return ChipsCategory;
    }(ProductCategory));
    exports.PotatoChipsCategory = ChipsCategory;
    var CandyCategory = (function (_super) {
        __extends(CandyCategory, _super);
        function CandyCategory() {
            return _super.call(this, "Candy", "Candy.png") || this;
        }
        return CandyCategory;
    }(ProductCategory));
    exports.CandyCategory = CandyCategory;
    var CandyBarCategory = (function (_super) {
        __extends(CandyBarCategory, _super);
        function CandyBarCategory() {
            return _super.call(this, "Candy Bar", "CandyBar.png") || this;
        }
        return CandyBarCategory;
    }(ProductCategory));
    exports.CandyBarCategory = CandyBarCategory;
});
//# sourceMappingURL=productCategory.js.map