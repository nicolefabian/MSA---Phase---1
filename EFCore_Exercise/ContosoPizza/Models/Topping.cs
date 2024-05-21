using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ContosoPizza.Models;
//can be used on one or on many pizzas
public class Topping
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string? Name { get; set; }

    public decimal Calories { get; set; }

    [JsonIgnore] //excludes the Pizzas property from the JSON representation of the Topping object
    public ICollection<Pizza>? Pizzas { get; set; }
}