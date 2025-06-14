function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Step 2: Add getMakeModel Method
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Step 3: Create SportsCar Constructor
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call Car constructor
    this.topSpeed = topSpeed;
}

// Step 4: Add getTopSpeed Method
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Step 5: Set up Inheritance
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;