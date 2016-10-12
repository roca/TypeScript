    let imagePath = "img/";

    export abstract class Coin {
        constructor(private value: number,private imageFile: string){}
        get Value() { 
            return this.value;
        }
        getImageUrl(): string {
        return imagePath + this.imageFile;
        }
    }

    export class Quarter extends Coin {
        constructor(){
            super(.25, "Quarter.png");
        }
    }
    export class Dime extends Coin {
        constructor() {
            super(.10,"Dime.png");
        }
    }
    export class Half extends Coin {
        constructor() {
            super(.5,"Half.png");
        }
    }
    export class Dollar extends Coin {
        constructor() {
            super(1.00,"Dollar.jpg");
        }
    }
