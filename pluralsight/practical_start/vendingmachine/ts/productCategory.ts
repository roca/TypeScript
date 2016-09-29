abstract class ProductCategory {
    private imagePath = "img/"
    constructor(public name: string,private imageName: string){}
    getImageUrl(): string {
       return this.imagePath + this.imageName;
    }
}
class SodaCategory extends ProductCategory {
   constructor() {
        super("Soda","SodaCan.png");
    }
}
class ChipsCategory extends ProductCategory {
   constructor() {
        super("Potato Chips","Chips.png");
    }
}
class CandyCategory extends ProductCategory {
   constructor() {
        super("Candy","Candy.png");
    }
}
class CandyBarCategory extends ProductCategory {
   constructor() {
        super("Candy Bar","CandyBar.png");
    }
}