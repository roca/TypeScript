"use strict";
function CalculateLateFee(daysLate) {
    return daysLate * 0.25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    return (age < 12) ? 3 : 10;
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log("This is private...");
}
//# sourceMappingURL=utilityFunctions.js.map