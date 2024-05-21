using Microsoft.EntityFrameworkCore;
using ContosoPizza.Models;

namespace ContosoPizza.Data;
//represents a DbContext class to interact with db named PizzaContext by inheritance
public class PizzaContext : DbContext
{
    //constructor since it is same name
    public PizzaContext (DbContextOptions<PizzaContext> options) //paramter for configuring the context
        : base(options) //base constructor call
        //to call DbContext class and passes options parameter to it
        //for database interactions
    {
    }

    //DbSet<T> represents tables or collections of entities in the db
    public DbSet<Pizza> Pizzas => Set<Pizza>(); //Set<T>() -> used to initialise these properties
    public DbSet<Topping> Toppings => Set<Topping>();
    public DbSet<Sauce> Sauces => Set<Sauce>();
}