class Vehicle {
  constructor(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log("Vroom!");
  }
}

const truck1 = new Vehicle(2009, "GMC", "Denali");
// truck1.drive();


class Car extends Vehicle {
  constructor(year, make, model, numWheels) {
    super(year, make, model);
    this.numWheels = 4;
  }

  carInfo() {
    console.log(`Your ${this.year} ${this.make} ${this.model} has ${ this.numWheels} wheels`);
  }
}

const car1 = new Car(2018, "Buick", "Regal");
car1.carInfo();
car1.drive();