// Defining a class called 'Car'
class Car {
    // Constructor method to initialize object properties
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isStarted = true;
      this.isRunning = false;
    }
  
    // Method to start the car
    start() {
      if (!this.isStarted) {
        this.isStarted = true;
        console.log(`${this.year} ${this.make} ${this.model} started.`);
      } else {
        console.log(`${this.year} ${this.make} ${this.model} not started.`);
      }
    }
  
    // Method to stop the car
    stop() {
      if (this.isRunning) {
        this.isRunning = false;
        console.log(`${this.year} ${this.make} ${this.model} has been stopped.`);
      } else {
        console.log(`${this.year} ${this.make} ${this.model} is already stopped.`);
      }
    }
  }
  
  // Creating instances of the 'Car' class
  let car1 = new Car('Toyota', 'Camry', 2022);
  let car2 = new Car('Honda', 'Accord', 2021);
  
  // Using methods of the 'Car' class
  car1.start();
  car2.start();
  car1.stop();
  car2.stop();
  