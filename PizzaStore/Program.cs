using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using PizzaStore.Models; //from Pizza.cs namespace

var builder = WebApplication.CreateBuilder(args);

//added connection string
//Pizzas -> checks for conenction string named Pizzas, could be in appsettings.json
//otherwise use the data source
var connectionString = builder.Configuration.GetConnectionString("Pizzas") ?? "Data Source=Pizzas.db";

builder.Services.AddEndpointsApiExplorer();
//adding the database
//using in memory
//builder.Services.AddDbContext<PizzaDb>(options => options.UseInMemoryDatabase("items"));

//using sqlite
builder.Services.AddSqlite<PizzaDb>(connectionString);

builder.Services.AddSwaggerGen(c =>
{
     c.SwaggerDoc("v1", new OpenApiInfo {
         Title = "PizzaStore API",
         Description = "Making the Pizzas you love",
         Version = "v1" });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
   app.UseSwagger();
   app.UseSwaggerUI(c =>
   {
      c.SwaggerEndpoint("/swagger/v1/swagger.json", "PizzaStore API V1");
   });
}

app.MapGet("/", () => "Hello World!");
//using the api
//return a list of pizzas
app.MapGet("/pizzas", async (PizzaDb db) => await db.Pizzas.ToListAsync());

//create new items
app.MapPost("/pizza", async (PizzaDb db, Pizza pizza) => //PizzaDb -> database, Pizza -> context class
{
    await db.Pizzas.AddAsync(pizza);
    await db.SaveChangesAsync();
    return Results.Created($"/pizza/{pizza.Id}", pizza);
});

//get a single item
app.MapGet("/pizza/{id}", async (PizzaDb db, int id) => await db.Pizzas.FindAsync(id));

//update an item
app.MapPut("/pizza/{id}", async (PizzaDb db, Pizza updatepizza, int id) =>
{
      var pizza = await db.Pizzas.FindAsync(id);
      if (pizza is null) return Results.NotFound();
      pizza.Name = updatepizza.Name;
      pizza.Description = updatepizza.Description;
      await db.SaveChangesAsync();
      return Results.NoContent();
});


//delete an item
app.MapDelete("/pizza/{id}", async (PizzaDb db, int id) =>
{
   var pizza = await db.Pizzas.FindAsync(id);
   if (pizza is null)
   {
      return Results.NotFound();
   }
   db.Pizzas.Remove(pizza);
   await db.SaveChangesAsync();
   return Results.Ok();
});

app.Run();
