"use strict";
var Fees;
(function (Fees) {
    function CalculateLateFee(daysLate) {
        return daysLate * 0.25;
    }
    Fees.CalculateLateFee = CalculateLateFee;
})(Fees = exports.Fees || (exports.Fees = {}));
function MaxBooksAllowed(age) {
    return (age < 12) ? 3 : 10;
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log("This is private...");
}
//# sourceMappingURL=utilityFunctions.js.map