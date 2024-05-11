//namespace namespaceName
//can define as many namespaces as needed within a single TypeScript file
// namespace Greetings {
//     //making the function available to code outside of the namespace using export keyword
//     export function returnGreeting (greeting: string) {
//         console.log(`The message from namespace Greetings is ${greeting}.`);
//     }
// }
// namespace GreetingsWithLength {
//     export function returnGreeting (greeting: string) {
//         let greetingLength = getLength(greeting);
//         console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
//     }
//     function getLength(message: string): number {
//         return message.length
//     }
// }

// //TO USE A CLASS OR FUNCTION WITHIN A NAMESPACE
// //returnGreeting('Hello');                     // Returns error
// Greetings.returnGreeting('Bonjour');         // OK
// GreetingsWithLength.returnGreeting('Hola');  // OK

//--------------------------------------------------------
import greet = AllGreetings.Greetings; //defining namespace alias

//NEST NAMESPACES WITHIN NAMESPACES
namespace AllGreetings {
    //adding export before both namespaces allow it to be accessible outside of the AllGreetings namespace
    export namespace Greetings {
        export function returnGreeting (greeting: string) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
    }
    export namespace GreetingsWithLength {
        export function returnGreeting (greeting: string) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        function getLength(message: string): number {
            return message.length
        }
    }
}


//CALLING THE FUNCTIONS 
AllGreetings.Greetings.returnGreeting('Bonjour');        // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK

//USING ALIAS
greet.returnGreeting("Hello");