using AddressBook.Server.Models;
using Microsoft.AspNetCore.Mvc;
namespace AddressBook.Server.Controllers;

[ApiController]
public class CountryController: ControllerBase{
    private readonly ApplicationDbContext _context;

    public CountryController(ApplicationDbContext context){
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    [HttpGet]
    [Route ("/addressbook/countries")]
    public IEnumerable<Country> GetCountries(){
        return _context.Country.ToList();
    }
}