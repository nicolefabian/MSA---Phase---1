"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
//config -> reads the .env file, parses the contents, assigns it to process.env, and 
//returns an object with a parsed key containing the loaded content or an error key if it failed
const result = dotenv_1.default.config();
if (result.error) {
    throw result.error;
}
console.log(result.parsed); // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST); //Access the values contains in each key in process.env and return the value to the console.
console.log(process.env.WEB_HOST);
