export function CalculateLateFee(daysLate: number): number {
     return daysLate * 0.25;
}
export function MaxBooksAllowed(age: number): number {
   return (age < 12) ? 3 : 10;
}
function privateFunc(): void {
   console.log("This is private...");
}
