"use strict";
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        //initialises or sets the _make property of the object being created to the value provided when the object is instantiated
        this._make = make;
        this._color = color;
        this._doors = doors; // Assign the value if provided, otherwise it will be undefined
    }
    //PERFORMING VALIDATION WHEN THE CAR OBJECT IS INITIALISED
    // constructor(make: string, color: string, doors = 4) {
    //     console.log(`Creating a new car with make: ${make}, color: ${color}, doors: ${doors}`);
    //     this._make = make;
    //     this._color = color;
    //since 4 is just default if not provided, in code below if i set one to 3, it would lead to error as it is odd
    //     if ((doors % 2) === 0) {
    //         this._doors = doors;
    //     } else {
    //         throw new Error('Doors must be an even number');
    //     }
    // }
    // Accessors
    get make() {
        //this -> current object instance
        //since it is set in the constructor, it uses _make 
        return this._make;
    }
    //takes a new make value that will be assigned to the make property
    set make(make) {
        this._make = make; // assigns the value of the make parameter to the _make property of the Car object.
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
}
//declaring new variable and assigning a new Car object to it
let myCar1 = new Car('Cool Car Company', 'blue', 2); // Instantiates the Car object with all parameters
console.log(myCar1.color); //accessing the property through the get or set accessor, which returns 'The color of the car is blue'
console.log(myCar1._color); //raw data for the property defined in the class
let myCar2 = new Car('Galaxy Motors', 'red', 3);
myCar2.doors = 6;
console.log(`Updating odd val to even val for door: ${myCar2.doors}`);
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(`Testing default/optional value: ${myCar3.doors}`);
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
//ACCESS MODIFIERS
myCar1._color;
