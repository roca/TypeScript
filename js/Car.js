var Engine = (function () {
    function Engine(hoursePower, engineType) {
        this.hoursePower = hoursePower;
        this.engineType = engineType;
    }
    return Engine;
})();
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
        this.engine = engine;
    }
    return Car;
})();
// window.onload = function() {
// 	var car = new Car('V8');
// 	car.start();
// 	car.stop();
// } 
