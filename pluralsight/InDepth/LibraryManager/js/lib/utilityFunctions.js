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
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
//# sourceMappingURL=utilityFunctions.js.map