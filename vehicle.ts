// Define Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement Car class
class Automobile implements Vehicle {
  constructor(public make: string, public model: string, public year: number) {}

  start(): void {
    console.log("Car engine started");
  }
}

// Create instance and test
const myVehicle = new Automobile("Toyota", "Camry", 2023);
myVehicle.start();
