//added 
using System.ComponentModel.DataAnnotations;

namespace ContosoPizza.Models;

public class Pizza
{
    public int Id { get; set; }
    
    [Required]
    [MaxLength(100)]
    public string? Name { get; set; }

    //can only have one sauce
    public Sauce? Sauce { get; set; }
    //can have one or more toppings
    
    public ICollection<Topping>? Toppings { get; set; }
}