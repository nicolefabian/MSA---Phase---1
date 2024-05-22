//in memory store
//using namespace to organise code-> all classes, interfaces etc belong to this namespace
namespace PizzaStore.DB; 
//defines a Pizza record representing a pizza entity
//record -> immutable way to define data types meaning values of their properties cannot be changed
 public record Pizza 
 {
   public int Id {get; set;} 
   public string ? Name { get; set; }
 }
//data access layer
 public class PizzaDB
 {
    //in memory data store for pizzas
   private static List<Pizza> _pizzas = new List<Pizza>()
   {
     new Pizza{ Id=1, Name="Montemagno, Pizza shaped like a great mountain" },
     new Pizza{ Id=2, Name="The Galloway, Pizza shaped like a submarine, silent but deadly"},
     new Pizza{ Id=3, Name="The Noring, Pizza shaped like a Viking helmet, where's the mead"} 
   };
//getting the list of pizzas
   public static List<Pizza> GetPizzas() 
   {
     return _pizzas;
   } 
//get pizza by id
   public static Pizza ? GetPizza(int id) 
   {
     return _pizzas.SingleOrDefault(pizza => pizza.Id == id);
   } 

   public static Pizza CreatePizza(Pizza pizza) 
   {
     _pizzas.Add(pizza);
     return pizza;
   }

   public static Pizza UpdatePizza(Pizza update) 
   {
     _pizzas = _pizzas.Select(pizza =>
     {
       if (pizza.Id == update.Id)
       {
         pizza.Name = update.Name;
       }
       return pizza;
     }).ToList();
     return update;
   }

   public static void RemovePizza(int id)
   {
     _pizzas = _pizzas.FindAll(pizza => pizza.Id != id).ToList();
   }
 }