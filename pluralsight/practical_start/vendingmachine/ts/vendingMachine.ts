/// <reference path="./coin.ts" />

class VendingMachine {
   private paid: number = 0;
   acceptCoin = (coin: Quater): void => {
       this.paid = this.paid + coin.Value;
       var element = document.getElementById("total")
       element.innerHTML = this.paid.toString();
   };
}