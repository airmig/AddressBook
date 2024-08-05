using System.ComponentModel.DataAnnotations;
namespace AddressBook.Server.Models;

public class Contact{
    public int Id {get; set;}
    [Required(ErrorMessage = "Name is required")]
    public required string Name {get; set;}
    [Required(ErrorMessage = "Last Name is required")]
    public required string LastName {get; set;}
    [Range(1, 195, ErrorMessage = "Invalid country code.")]
    [Required(ErrorMessage = "Country is required")]
    public required int Country {get; set;}
    [Required(ErrorMessage = "Phone is required")]
    [Phone]
    public required string Phone {get; set;}
    [Required(ErrorMessage = "Email is required")]
    [EmailAddress]
    public required string Email {get; set;}
    [Required(ErrorMessage = "City is required")]
    public required string City {get; set;}
    [Required(ErrorMessage = "State or Provice is required")]
    public required string StateProvince {get; set;}
    [Required(ErrorMessage = "ZipCode is required")]
    public required string ZipCode {get; set;}
}