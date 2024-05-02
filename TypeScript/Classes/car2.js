var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    //protected -> allows for subclasses of the class to use the function
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
//-------------------------------------------------------------------------
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    // Constructor
    function ElectricCar(make, color, range, doors) {
        if (doors === void 0) { doors = 2; }
        //super() to include parameters from the base class
        //super keyword executes the constructor of the base class when it runs
        var _this = _super.call(this, make, color, doors) || this;
        _this._range = range;
        return _this;
    }
    Object.defineProperty(ElectricCar.prototype, "range", {
        // Accessors
        get: function () {
            return this._range;
        },
        set: function (range) {
            this._range = range;
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    ElectricCar.prototype.charge = function () {
        console.log(this.worker() + " is charging.");
    };
    // Overrides the brake method of the Car class
    ElectricCar.prototype.brake = function () {
        return "".concat(this.worker(), "  is braking with the regenerative braking system.");
    };
    return ElectricCar;
}(Car2));
var spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
var eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log("Extends:");
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
