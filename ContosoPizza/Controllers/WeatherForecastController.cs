using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;

namespace ContosoPizza.Controllers;
//localhost:5219/weatherforecast

[ApiController] // providing default behaviours like figuring where data is from, enforcing attribute-based routing, and error handling
                // attribute-routing -> routes are defined using attributes directly on controller actions or controllers themselves. routes are defined alongside the code that handles the request like [HtttpGet]
[Route("[controller]")] // specifies the URL pattern for accessing API endpoints, https://localhost:5219/weatherforecast or api/[controller] for https://localhost:5219/api/weatherforecast
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }
//like giving a name to a road so you can easily find it on a map
    [HttpGet] 
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

   [HttpGet("listedtry")]
    //[HttpGet(Name = "GetListedTry")]
    public IActionResult GetListed()
    {
        return Ok("Hi list method!");
    }
}
