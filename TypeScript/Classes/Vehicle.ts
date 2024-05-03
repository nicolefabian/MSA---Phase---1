interface Vehicle {
    //can only can contain public
    make: string
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Car3 implements Vehicle {
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
        Car3.numberOfCars++; // Increments the value of the static property
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
        return Car3.numberOfCars;
    }
}

//declaring new variable and assigning a new Car object to it


// Instantiate the Car object with all parameters
let myCar6 = new Car3('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar7 = new Car3('Galaxy Motors', 'blue', 2);
// Returns 2 since there are two cars added
console.log(Car3.getNumberOfCars());
