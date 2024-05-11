"use strict";
//contains all the main code of the application, including the import statements
Object.defineProperty(exports, "__esModule", { value: true });
//importing the returnGreeting func
const greetings_module_js_1 = require("./greetings_module.js");
//renaming the function since it is contained in a different module
const greetings_utilities_module_js_1 = require("./greetings-utilities_module.js");
//import * as allGreetingFunctions from './greetings_module.js';  // imports all exported components in the module
(0, greetings_module_js_1.returnGreeting)('Hola!'); // Displays 'The message from Greetings_module is Hola!'
//allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
(0, greetings_utilities_module_js_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
