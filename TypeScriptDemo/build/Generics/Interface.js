"use strict";
//Declaring two variables using the identity interface as an object type
let returnNumber = {
    value: 25,
    message: 'Hello!'
};
let returnString = {
    value: 'Hello!',
    message: 25
};
// Declare a function called processIdentity that matches the signature (value: T, message: U) defined in ProcessIdentity.
//<T,U> -> specifies that this function is a generic function accepting 2 parameters
function processIdentity(value, message) {
    // Log the message to the console.
    console.log(message);
    // Return the value parameter.
    return value;
}
// Declare a variable called processor with the type ProcessIdentity<number, string>.
// This means it's a function that takes a number and a string, and returns a number.
let processor = processIdentity;
// Call the processor function with a number and a string.
// Since the types match (number and string), this call is valid.
let returnNumber1 = processor(100, 'Hello!'); // OK
// generic class called processIdentity2 that implements the ProcessIdentity2 interface.
// Use generic type variables X and Y for the properties and method defined in the interface.
class processIdentity2 {
    // Define a constructor that accepts arguments for value and message.
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    // Implement the process method defined in the ProcessIdentity interface.
    // This method logs the message to the console and returns the value.
    process() {
        console.log(this.message); //displays on the console
        return this.value;
    }
}
// Declare a new variable processor2 and instantiate a new processIdentity2 object.
// Pass number and string as the generic types X and Y, and provide values 100 and 'Hello' respectively.
let processor2 = new processIdentity2(100, 'Hello');
// Call the process method on the processor2 object.
processor2.process(); // Displays 'Hello'
// Attempt to assign a string value to the value property of the processor object.
// Since the value property is typed as number, TypeScript raises a type check error.
//processor2.value = '100';       // Type check error
// Access the value property of processor2
console.log(processor2.value); // This will output: 100
//-----------------------------------------------------
//DECLARE A GENERIC CLASS WITHOUT AN INTERFACE
class processIdentity3 {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor3 = new processIdentity3(100, 'Hello');
processor3.getIdentity(); // Displays 'Hello'
