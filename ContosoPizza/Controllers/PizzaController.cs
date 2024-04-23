using ContosoPizza.Models;
using ContosoPizza.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContosoPizza.Controllers;

[ApiController] 
[Route("[controller]")] //it defines the mapping: https://localhost:{PORT}/pizza
public class PizzaController : ControllerBase
{
    public PizzaController()
    {
    }

    // GET all action
    [HttpGet]
    public ActionResult<List<Pizza>> GetAll() => //lambda expression used to define methods that consist of single statement, typically a return statement
        PizzaService.GetAll(); 

    // GET by Id action
    [HttpGet("{id}")]
    public ActionResult<Pizza> Get(int id)
    {
        var pizza = PizzaService.Get(id);

        if(pizza == null)
            return NotFound();

        return pizza;
    }

    // POST action
    [HttpPost]
    public IActionResult Create(Pizza pizza) 
    // since the controller has [ApiController], it automatically enables model binding for this controller (attempts to match the data)
    {            
        PizzaService.Add(pizza); //adding the new to list
        return CreatedAtAction(nameof(Get), new { id = pizza.Id }, pizza); // CreatedAtAction -> returns HTTP response
        //with a status code of 201 (Created) and a location header pointing to a newly created resource
        //the resource URL is like /pizza/1 generated using nameOf(Get)
        //
    }

    // PUT action
  [HttpPut("{id}")]
    public IActionResult Update(int id, Pizza pizza)
    {
        if (id != pizza.Id)
            return BadRequest();
            
        var existingPizza = PizzaService.Get(id);
        if(existingPizza is null)
            return NotFound();
    
        PizzaService.Update(pizza);           
    
        return NoContent();
    }

    // DELETE action
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var pizza = PizzaService.Get(id);
    
        if (pizza is null)
            return NotFound();
        
        PizzaService.Delete(id);
    
        return NoContent();
    }
}