abstract class Coin {
    constructor(private value: number,private imageUrl: string){}
    get Value() { 
        return this.value;
    }
    getImageUrl(): string {
       return this.imageUrl;
    }
}

class Quarter extends Coin {
    constructor(){
        super(.25,"img/Quarter.png");
    }
}
class Dime extends Coin {
    constructor() {
        super(.10,"img/Dime.png");
    }
}
class Half extends Coin {
    constructor() {
        super(.5,"img/Half.png");
    }
}
class Dollar extends Coin {
    constructor() {
        super(1.00,"img/Dollar.jpg");
    }
}
