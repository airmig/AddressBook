namespace AddressBook.Server.Models;
public class Country{
    public int Id {get; set;}
    public required string Name {get; set;}
    public required string Code {get; set;}
    public required string ISOAlpha2 {get; set;}
    public required string ISOAlpha3 {get; set;}
}