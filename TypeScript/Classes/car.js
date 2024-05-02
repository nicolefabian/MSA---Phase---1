var Car = /** @class */ (function () {
    // Constructor
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        //initialises or sets the _make property of the object being created to the value provided when the object is instantiated
        this._make = make;
        this._color = color;
        this._doors = doors; // Assign the value if provided, otherwise it will be undefined
    }
    Object.defineProperty(Car.prototype, "make", {
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
        get: function () {
            //this -> current object instance
            //since it is set in the constructor, it uses _make 
            return this._make;
        },
        //takes a new make value that will be assigned to the make property
        set: function (make) {
            this._make = make; // assigns the value of the make parameter to the _make property of the Car object.
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return 'The color of the car is ' + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if ((doors % 2) === 0) {
                this._doors = doors;
            }
            else {
                throw new Error('Doors must be an even number');
            }
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    Car.prototype.accelerate = function (speed) {
        return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH.");
    };
    Car.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the standard braking system.");
    };
    Car.prototype.turn = function (direction) {
        return "".concat(this.worker(), " is turning ").concat(direction);
    };
    // This function performs work for the other method functions
    Car.prototype.worker = function () {
        return this._make;
    };
    return Car;
}());
//declaring new variable and assigning a new Car object to it
var myCar1 = new Car('Cool Car Company', 'blue', 2); // Instantiates the Car object with all parameters
console.log(myCar1.color); //accessing the property through the get or set accessor, which returns 'The color of the car is blue'
console.log(myCar1._color); //raw data for the property defined in the class
var myCar2 = new Car('Galaxy Motors', 'red', 3);
myCar2.doors = 6;
console.log("Updating odd val to even val for door: ".concat(myCar2.doors));
var myCar3 = new Car('Galaxy Motors', 'gray');
console.log("Testing default/optional value: ".concat(myCar3.doors));
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
//ACCESS MODIFIERS
myCar1._color;
