class Car2 {
    // Properties -> raw data that is passed to the object when it's initialized
    private static numberOfCars: number = 0;  // New static property
    private _make: string;
    private _color: string;
    private _doors: number;
    //protected -> allows for subclasses of the class to use the function
    protected worker(): string {
        return this._make;
    }

    // Constructors
    constructor(make:string, color: string, doors = 4) {
        //initialises or sets the _make property of the object being created to the value provided when the object is instantiated
        this._make = make;
        this._color = color;
        this._doors = doors; // Assign the value if provided, otherwise it will be undefined
        Car2.numberOfCars++; // Increments the value of the static property
    }
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
        } else {
            throw new Error('Doors must be an even number');
        }
    }
    

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }

    public static getNumberOfCars(): number {
        return Car2.numberOfCars;
    }
}

//declaring new variable and assigning a new Car object to it


// Instantiate the Car object with all parameters
let myCar4 = new Car2('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar5 = new Car2('Galaxy Motors', 'blue', 2);
// Returns 2 since there are two cars added
console.log(Car2.getNumberOfCars());


//-------------------------------------------------------------------------
class ElectricCar extends Car2 {
    // Properties unique to ElectricCar
    private _range: number;
    // Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        //super() to include parameters from the base class
        //super keyword executes the constructor of the base class when it runs
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.")
    }

    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()}  is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log("Extends:")
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"
console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"