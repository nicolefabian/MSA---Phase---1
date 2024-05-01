using ContosoPizza.Models; //implementing namespace 

namespace ContosoPizza.Services; // defining new namespace

public static class PizzaService //declaring a static class, static class -> cannot be instantiated
                                // meaning you cant create objects(instances) of it using the *new* keyword
                                //designed to provide container for static members such as methods, properties,
                                // fields,and nested types
{
    static List<Pizza> Pizzas { get; } //holding list of pizzas
    static int nextId = 3; //tracking ID of next pizza
    static PizzaService() //constructor to initialise static fields
    {
        Pizzas = new List<Pizza> //creating a new list of Pizza
        {
            new Pizza { Id = 1, Name = "Classic Italian", IsGlutenFree = false },
            new Pizza { Id = 2, Name = "Veggie", IsGlutenFree = true }
        };
    }

    public static List<Pizza> GetAll() => Pizzas;

    //method to get a pizza by ID
    public static Pizza? Get(int id) => Pizzas.FirstOrDefault(p => p.Id == id);

    public static void Add(Pizza pizza)
    {
        pizza.Id = nextId++; // assigning a unique ID to the new pizza by incrementing the value of nextID
        Pizzas.Add(pizza); //adding the new pizza to the list
    }

    public static void Delete(int id)
    {
        var pizza = Get(id); //calling Get function to get pizza by ID
        if(pizza is null)
            return;

        Pizzas.Remove(pizza); //deleting from the list
    }

    public static void Update(Pizza pizza)
    {
        var index = Pizzas.FindIndex(p => p.Id == pizza.Id); //FindIndex -> searches for an element in the list that satisfies the specified condition
        //p represents each pizza object in the Pizza list during the search operation. It acts as a placeholder for each Pizza in the list as the search progresses
        //FindIndex method iterates through them during the search
        // pizza is the pizza object passed as an argument to the Update method. It is the pizza you want to find
        // its the pizza youre comparing against each pizza object (p) in the list to find a match
        
        if(index == -1) // checking if pizza exists
            return;

        Pizzas[index] = pizza; //updating the pizza at found index
    }
}