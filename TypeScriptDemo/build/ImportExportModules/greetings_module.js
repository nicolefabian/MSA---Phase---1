"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = void 0;
//export -> allows the function to be available for other modules
function returnGreeting(greeting) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}
exports.returnGreeting = returnGreeting;
