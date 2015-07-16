interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void):void;
    stop(callback: (stopStatus: boolean, engineType: string) => void):void;
}

interface IAutoOptions {
    basePrice: number;
    engine: IEngine;
    make: string;
    model: string;
}

interface ITruckOptions extends IAutoOptions{
    bedLength: string;
    fourByFour: boolean;

}

class Engine implements IEngine{
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class CustomEngine implements IEngine{
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, "Custome Engine");
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, "Custome Engine");
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) {}
}

class Auto {
    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(options: IAutoOptions) {
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.make = options.make;
        this.model = options.model;
    }

    calculateTotal() : number {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value: IEngine) {
        if (value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor( options: ITruckOptions) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }
};

window.onload = function () {
    var truck = new Truck({
        basePrice:  40000,
        engine:     new CustomEngine(300, 'V8'),
        make:       'Chevy',
        model:      'Silverado',
        bedLength:  "Long Bed",
        fourByFour: true
    });


  alert(truck.bedLength);






};


