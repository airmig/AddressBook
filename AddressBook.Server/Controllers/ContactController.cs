using AddressBook.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AddressBook.Server.Controllers;
[ApiController]
public class ContactController:ControllerBase{
    private readonly ApplicationDbContext _context;

    public ContactController(ApplicationDbContext context){
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    [HttpGet]
    [Route("/addressbook/contacts")]
    public IEnumerable<Contact> GetContacts(){
        return _context.Contacts.ToList();
    }

    [HttpPost]
     [Route("/addressbook/addcontact")]
    public IActionResult AddContact(Contact contact){
        try{
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return validation errors
            }

            _context.Add(contact);
            _context.SaveChanges();
            return StatusCode(200, "Contact Created.");
        }
        catch{
            return StatusCode(500, "Unable to Add Contact.");
        }
    }

    [HttpGet]
    [Route("/addressbook/getcontact/{id}")]
    public IActionResult GetContactById(int id){
        try{
            Contact? contact = _context.Contacts.Find(id) ?? throw new Exception();
            return StatusCode(200, contact);
        }
        catch {
            return StatusCode(404, "Not Found.");
        }
    }

    [HttpDelete]
    [Route("/addressbook/deletecontact/{id}")]
    public IActionResult DeleteContactById(int id){
        try{
            Contact? contact = _context.Contacts.Find(id) ?? throw new Exception();
            _context.Contacts.Remove(contact);
            _context.SaveChanges();
            return StatusCode(200, "Contact Deleted.");
        }
        catch {
            return StatusCode(404, "Not Found.");
        }
    }

    [HttpPut]
    [Route("/addressbook/updatecontact")]
    public IActionResult UpdateContact(int id, [FromBody] Contact contact){
        try{
            if (id!=contact.Id)
                return StatusCode(400, "Bad Request");
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Values
                .SelectMany(v => v.Errors)
                .Select(e => e.ErrorMessage)
                .ToList();
            
                return BadRequest(new { Errors = errors });
            }

            _context.Contacts.Update(contact);
            _context.SaveChanges(true);
            return StatusCode(200, "Contact updated.");
        }
        catch{
            return StatusCode(500, "Unable to update Contact.");
        }
    }
}