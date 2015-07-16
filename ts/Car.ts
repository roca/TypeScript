class Engine {
	constructor(public hoursePower: number,
		        public engineType: string){

	}
}

class Car {

    constructor(public engine: Engine){
        this.engine = engine;
	}
}

// window.onload = function() {
// 	var car = new Car('V8');
// 	car.start();
// 	car.stop();
// }