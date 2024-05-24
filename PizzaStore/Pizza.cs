using Microsoft.EntityFrameworkCore;

namespace PizzaStore.Models
{
    //data model
    public class Pizza
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
    }
    //setting up in-memory database
    class PizzaDb : DbContext //DbContext -> represents a connection or session that's used to query and save instances of entities in a database.
    {
        public PizzaDb(DbContextOptions options) : base(options) { }
        public DbSet<Pizza> Pizzas { get; set; } = null!;
    }
}