using ContosoPizza.Services;
// Additional using declarations
using ContosoPizza.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//registering PizzaContext class with the ASP.NET Core dependency injection system
//allows to inject an instance of PizzaContext into otherparts of the app
//Add pizza context
builder.Services.AddSqlite<PizzaContext>("Data Source=ContosoPizza.db");//dfines SQLite connection string pointing to local file ContossoPizza.db


// Add the PromotionsContext

builder.Services.AddScoped<PizzaService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

// Add the CreateDbIfNotExists method call

app.MapGet("/", () => @"Contoso Pizza management API. Navigate to /swagger to open the Swagger test UI.");

app.Run();
