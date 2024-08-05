using Microsoft.EntityFrameworkCore;
namespace AddressBook.Server.Models;

public class ApplicationDbContext: DbContext
{
    public DbSet<Contact> Contacts {get; set;}
    public DbSet<Country> Country {get; set;}
    

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options){}
}