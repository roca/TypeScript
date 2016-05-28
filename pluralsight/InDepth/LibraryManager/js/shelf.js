"use strict";
var Shelf = (function () {
    function Shelf() {
        this._items = new Array();
    }
    Shelf.prototype.add = function (item) {
        this._items.push(item);
    };
    Shelf.prototype.getFirst = function () {
        return this._items[0];
    };
    return Shelf;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shelf;
//# sourceMappingURL=shelf.js.map