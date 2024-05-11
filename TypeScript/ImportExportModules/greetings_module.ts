//export -> allows the function to be available for other modules
export function returnGreeting (greeting: string) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}