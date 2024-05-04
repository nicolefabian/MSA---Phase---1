/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {

    private _data: Array <T> = new Array(10);
    
    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item; //[index] -> index accessor 
        } else {
            alert('Index is greater than 10')
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

let cities = new DataStore();

cities.AddOrUpdate(0, "Mumbai"); //item -> Mumbai
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added cause it exceeds the condition

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.
// Create a new DataStore instance that stores numbers.
let empIDs = new DataStore<number>();

// Add or update numbers at specific indices.
empIDs.AddOrUpdate(0, 50); // Add the number 50 at index 0.
empIDs.AddOrUpdate(1, 65); // Add the number 65 at index 1.
empIDs.AddOrUpdate(2, 89); // Add the number 89 at index 2.

// Retrieve the value at index 0 from the DataStore.
console.log(empIDs.GetData(0)); // This will return 50.

// TODO Test items as objects.
type Pets = {
    name: string;
    breed: string;
    age: number
}
let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5});
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.GetData(1));         // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }