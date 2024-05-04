interface Identity<T, U> {
    value: T;
    message: U;
}

//Declaring two variables using the identity interface as an object type
let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}
//----------------------------------------------
//declaring a generic interface as a function type
//This interface represents a function signature with two generic type parameters: T and U.
interface ProcessIdentity<T, U> {
    // Define a method signature that matches the desired function signature.
    //function signature -> since interface describe the shape of a function, it allows to define types of its parameters and return value
    // This method takes two parameters (value: T, message: U) and returns a value of type T.
    (value: T, message: U): T;
}

// Declare a function called processIdentity that matches the signature (value: T, message: U) defined in ProcessIdentity.
//<T,U> -> specifies that this function is a generic function accepting 2 parameters
function processIdentity<T, U>(value: T, message: U): T {
    // Log the message to the console.
    console.log(message);
    // Return the value parameter.
    return value;
}

// Declare a variable called processor with the type ProcessIdentity<number, string>.
// This means it's a function that takes a number and a string, and returns a number.
let processor: ProcessIdentity<number, string> = processIdentity;

// Call the processor function with a number and a string.
// Since the types match (number and string), this call is valid.
let returnNumber1 = processor(100, 'Hello!');   // OK

// Attempt to call the processor function with a string and a number.
// Since the types don't match (string and number), TypeScript raises a type check error.
//let returnString1 = processor('Hello!', 100);   // Type check error


//-------------------------------------------------------------------------
//DECLARE A GENERIC INTERFACE AS A CLASS TYPE
// Declare an interface called ProcessIdentity2.
interface ProcessIdentity2<T, U> {
    // It has two properties: value (of type T) and message (of type U).
    value: T;
    message: U;
    //declares a method called process that returns a value of type T.
    process(): T;
}

// generic class called processIdentity2 that implements the ProcessIdentity2 interface.
// Use generic type variables X and Y for the properties and method defined in the interface.
class processIdentity2<X, Y> implements ProcessIdentity2<X, Y> {
    // Define properties value and message of types X and Y respectively.
    value: X;
    message: Y;

    // Define a constructor that accepts arguments for value and message.
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }

    // Implement the process method defined in the ProcessIdentity interface.
    // This method logs the message to the console and returns the value.
    process(): X {
        console.log(this.message); //displays on the console
        return this.value; 
    }
}

// Declare a new variable processor2 and instantiate a new processIdentity2 object.
// Pass number and string as the generic types X and Y, and provide values 100 and 'Hello' respectively.
let processor2 = new processIdentity2<number, string>(100, 'Hello');

// Call the process method on the processor2 object.
processor2.process();           // Displays 'Hello'

// Attempt to assign a string value to the value property of the processor object.
// Since the value property is typed as number, TypeScript raises a type check error.
//processor2.value = '100';       // Type check error

// Access the value property of processor2
console.log(processor2.value); // This will output: 100


//-----------------------------------------------------
//DECLARE A GENERIC CLASS WITHOUT AN INTERFACE
class processIdentity3<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor3 = new processIdentity3<number, string>(100, 'Hello');
processor3.getIdentity();      // Displays 'Hello'