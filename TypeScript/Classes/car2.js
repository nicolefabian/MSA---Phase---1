var Car2 = /** @class */ (function () {
    // Constructors
    function Car2(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        //initialises or sets the _make property of the object being created to the value provided when the object is instantiated
        this._make = make;
        this._color = color;
        this._doors = doors; // Assign the value if provided, otherwise it will be undefined
        Car2.numberOfCars++; // Increments the value of the static property
    }
    // ...
    Car2.prototype.worker = function () {
        return this._make;
    };
    Object.defineProperty(Car2.prototype, "make", {
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
    Object.defineProperty(Car2.prototype, "color", {
        get: function () {
            return 'The color of the car is ' + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "doors", {
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
    Car2.prototype.accelerate = function (speed) {
        return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH.");
    };
    Car2.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the standard braking system.");
    };
    Car2.prototype.turn = function (direction) {
        return "".concat(this.worker(), " is turning ").concat(direction);
    };
    Car2.getNumberOfCars = function () {
        return Car2.numberOfCars;
    };
    // Properties -> raw data that is passed to the object when it's initialized
    Car2.numberOfCars = 0; // New static property
    return Car2;
}());
//declaring new variable and assigning a new Car object to it
// Instantiate the Car object with all parameters
var myCar4 = new Car2('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
var myCar5 = new Car2('Galaxy Motors', 'blue', 2);
// Returns 2 since there are two cars added
console.log(Car2.getNumberOfCars());
