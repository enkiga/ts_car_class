// Implement Car class
var Automobile = /** @class */ (function () {
    function Automobile(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Automobile.prototype.start = function () {
        console.log("Car engine started");
    };
    return Automobile;
}());
// Create instance and test
var myVehicle = new Automobile("Toyota", "Camry", 2023);
myVehicle.start();
