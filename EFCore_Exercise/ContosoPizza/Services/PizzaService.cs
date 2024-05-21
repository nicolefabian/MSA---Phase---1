//service class that defines CRUD methods
using ContosoPizza.Models;
using ContosoPizza.Data;
using Microsoft.EntityFrameworkCore; //gain access to all types (classes, interfaces) defined within the namespace
// By importing Microsoft.EntityFrameworkCore, you can use classes and methods provided by Entity Framework Core to interact with databases, define database models, perform database migrations, and more.
namespace ContosoPizza.Services;

public class PizzaService
{
    private readonly PizzaContext _context; //PizzaContext from Data folder 
    //dependency injection
    //when create instance of PizzaService, ASP.NET Core looks at constructor and sees it needs PizzaContext and provides one
    //allowing PizzaService to interact with the database through PizzaContext
    public PizzaService(PizzaContext context)
    {
        _context = context;
    }

    public IEnumerable<Pizza> GetAll()
    {
        return _context.Pizzas //access the Pizza property
            .AsNoTracking() //not track changes from the db; useful when only need to read data
            .ToList(); //return the list of Pizzas 
    }

    public Pizza? GetById(int id)
    {
        return _context.Pizzas
            //=> lambda expression
            //includes related toppings per pizza
            .Include(p => p.Toppings)
            //includes related sauce
            .Include(p => p.Sauce)
            .AsNoTracking() //dont track changes
            .SingleOrDefault(p => p.Id == id); //retrieves single pizza from the database based on the condition
    }

    public Pizza Create(Pizza newPizza)
    {
        _context.Pizzas.Add(newPizza);
        _context.SaveChanges();

        return newPizza;
    }
    public void AddTopping(int pizzaId, int toppingId)
    {
        var pizzaToUpdate = _context.Pizzas.Find(pizzaId);
        var toppingToAdd = _context.Toppings.Find(toppingId);

        if (pizzaToUpdate is null || toppingToAdd is null)
        {
            throw new InvalidOperationException("Pizza or topping does not exist");
        }

        if (pizzaToUpdate.Toppings is null)
        {
            pizzaToUpdate.Toppings = new List<Topping>();
        }

        pizzaToUpdate.Toppings.Add(toppingToAdd);

        _context.SaveChanges();
    }

    public void UpdateSauce(int pizzaId, int sauceId)
    {
        var pizzaToUpdate = _context.Pizzas.Find(pizzaId);
        var sauceToUpdate = _context.Sauces.Find(sauceId);

        if (pizzaToUpdate is null || sauceToUpdate is null)
        {
            throw new InvalidOperationException("Pizza or sauce does not exist");
        }

        pizzaToUpdate.Sauce = sauceToUpdate;

        _context.SaveChanges();
    }

    public void DeleteById(int id)
    {
        var pizzaToDelete = _context.Pizzas.Find(id);
        if (pizzaToDelete is not null)
        {
            _context.Pizzas.Remove(pizzaToDelete);
            _context.SaveChanges();
        }
    }
}