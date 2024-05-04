// Define a base class called CustomCar with properties make and doors.
class CustomCar {
    make: string = 'Generic Car';
    doors: number = 4;
}

// Define a subclass CustomElectricCar inheriting from CustomCar.
class CustomElectricCar extends CustomCar {
    make = 'Electric Car';
    doors = 4;
}

// Define a subclass CustomTruck inheriting from CustomCar.
class CustomTruck extends CustomCar {
    make = 'Truck';
    doors = 2;
}

// Define a generic function called accelerate.
// It accepts a generic instance of CustomCar and returns it.
// The generic type T must extend CustomCar, allowing access to CustomCar's properties and methods
//T can be any subclass of CustomCar, such as CustomElectricCar or CustomTruck, or CustomCar itself
function accelerate<T extends CustomCar>(car: T): T { //(car: T) -> the function parameter car is type T meaning it can be any subclass of CustomCar which lets you access properties and methods of CustomCar
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}

//Instantiate an CustomElectricCar object and call the accelerate function with it.
let myElectricCar = new CustomElectricCar;
accelerate<CustomElectricCar>(myElectricCar);

// Instantiate a CustomTruck object and call the accelerate function with it.
let myTruck = new CustomTruck;
accelerate<CustomTruck>(myTruck);


//OUTPUT
// "All 4 doors are closed."
// "The Electric Car is now accelerating!"
// "All 2 doors are closed."
// "The Truck is now accelerating!"