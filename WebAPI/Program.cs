using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("Contacts")
);

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.SeedData();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/", () => "Hello World!");
app.MapGet("/{id:int}/{name}", (int id, string name) =>
{
    return $"Hello {name} with id {id}";
});
app.MapGet("/api/contacts", async (AppDbContext context) =>
{
    try
    {
        var list = await context.Contacts.ToListAsync();
        return Results.Ok(list.Select(contact => (ContactDTO)contact));
    }
    catch (Exception e)
    {
        return Results.Problem(
            detail: "Wystpił błąd podczas realizacji tego żądania",
            title: "Błąd" + e.Message
        );
    }
});
app.MapGet("/api/contacts/{id}", async (int id, AppDbContext context) =>
{
    try
    {
        return await context.Contacts.FindAsync(id) is Contact contact
        ? Results.Ok((ContactDTO)contact)
        : Results.NotFound();
    }
    catch
    {
        return Results.Problem(
            detail: "Wystpił błąd podczas realizacji tego żądania",
            title: "Błąd"
        );
    }
});

//Zadanie 1 START (POST)
app.MapPost("/api/contacts", async (ContactDTO contact, AppDbContext context) =>
{
    try
    {
        context.Contacts.Add(contact);
        await context.SaveChangesAsync();
        return Results.Created($"/api/contacts/{contact.Id}", contact);
    }
    catch
    {
        return Results.Problem(
            detail: "Wystpił błąd podczas realizacji tego żądania",
            title: "Błąd"
        );
    }
});
//Zadanie 1 END (POST)

//Zadanie 2 START (PUT)
app.MapPut("/api/contacts/{id}", async (int id, ContactDTO contact, AppDbContext context) =>
{
    try
    {
        if (id != contact.Id)
            return Results.BadRequest();
        context.Contacts.Update(contact);
        await context.SaveChangesAsync();
        return Results.Ok(contact);
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message);
        return Results.Problem(
            detail: "Wystpił błąd podczas realizacji tego żądania",
            title: "Błąd"
        );
    }
});
//Zadanie 2 END (PUT)

//Zadanie 3 START (DELETE)
app.MapDelete("/api/contacts/{id}", async (int id, AppDbContext context) =>
{
    try
    {
        var contact = await context.Contacts.FindAsync(id);
        if (contact is null)
            return Results.NotFound();
        context.Contacts.Remove(contact);
        await context.SaveChangesAsync();
        return Results.Ok();
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message);
        return Results.Problem(
            detail: "Wystpił błąd podczas realizacji tego żądania",
            title: "Błąd"
        );
    }
});
//Zadanie 3 END (DELETE)

//Zadanie 4 START (GET)
app.MapGet("/api/contacts/filter/{field}/{value}", async (string field, string value, AppDbContext context) =>
{
    try
    {
        var contacts = await context.Contacts.ToListAsync();
        var filteredContacts = contacts.Where(
            contact => contact.GetType().GetProperty(field)?.GetValue(contact) is List<Email> emails ?
            emails.Any(email => email.Value.Contains(value)) 
            :
            contact.GetType().GetProperty(field)?.GetValue(contact)?.ToString()?.Contains(value)
            ?? false);
        return Results.Ok(filteredContacts.Select(contact => (ContactDTO)contact));
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message);
        return Results.Problem(
            detail: "Wystpił błąd podczas realizacji tego żądania",
            title: "Błąd"
        );
    }
});
//Zadanie 4 END (GET)

app.Run();

public class ContactDTO 
{
    public int Id { get; set; }
    public string FirstName { get; set; } = String.Empty;
    public string LastName { get; set; } = String.Empty;
    public List<string> Emails { get; set; } = new List<string>();
    public int Age { get; set; }
    public Sex Sex { get; set; }
    public static implicit operator Contact(ContactDTO cDTO) => new Contact(
        id: cDTO.Id,
        firstName: cDTO.FirstName,
        lastName: cDTO.LastName,
        sex: cDTO.Sex,
        emails: cDTO.Emails.Select(email => new Email(email)).ToList(),
        age: cDTO.Age
    );
    public static explicit operator ContactDTO(Contact c) => new ContactDTO()
    {
        Id = c.Id,
        FirstName = c.FirstName,
        LastName = c.LastName,
        Sex = c.Sex,
        Age = c.Age,
        Emails = c.Emails.Select(email => email.Value).ToList()
    };
}

public enum Sex { Male, Female }
public record Age
{
    public int Value { get; }
    public Age(int value)
    {
        if (value < 18 && value < 120)
            throw new ArgumentOutOfRangeException();
        Value = value;
    }
    public static implicit operator int(Age age) => age.Value;
    public static implicit operator Age(int value) => new Age(value);
}
public record Email(string Value)
{
    public static implicit operator String(Email email) => email.Value;
    public static implicit operator Email(string text) => new Email(text);
}
public class Contact
{
    public int Id { get; private set; }
    public string FirstName { get; private set; } = string.Empty;
    public string LastName { get; private set; } = string.Empty;
    public Sex Sex { get; private set; }
    public List<Email> Emails { get; private set; } = new List<Email>();
    public Age Age { get; private set; } = null!;
    private Contact() { }
    public Contact(int id, string firstName, string lastName, Sex sex, List<Email> emails, Age age)
    {
        this.Id = id;
        this.FirstName = String.IsNullOrWhiteSpace(firstName) ? throw new ArgumentException() : firstName;
        this.LastName = String.IsNullOrWhiteSpace(lastName) ? throw new ArgumentException() : lastName;
        this.Sex = sex;
        this.Emails = emails ?? throw new ArgumentNullException(nameof(emails));
        this.Age = age ?? throw new ArgumentNullException(nameof(age));
    }
}

class AppDbContext : DbContext
{
    public DbSet<Contact> Contacts => Set<Contact>();
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contact>()
            .OwnsMany(contact => contact.Emails, emailsBuilder =>
            {
                emailsBuilder.HasKey(email => email.Value);
                emailsBuilder.Property(email => email.Value);
            });
        modelBuilder.Entity<Contact>()
            .OwnsOne(contact => contact.Age, ageBuilder => ageBuilder
            .Property(age => age.Value));
    }
}

static class SeedDataExtensions
{
    public static void SeedData(this IHost app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
            db.Contacts.AddRange(
                new Contact(0, "Ala", "Kot", Sex.Female, new List<Email>() { new Email("ala.kot@przyklad.pl"), new Email("test1@gmail.com") }, 23),
                new Contact(0, "Tomasz", "Nowak", Sex.Male, new List<Email>() { new Email("tomasz.nowak@przyklad.pl"), new Email("test2@gmail.com") }, 34),
                new Contact(0, "Cezary", "Adamski", Sex.Male, new List<Email>() { new Email("cezary.adamski@przyklad.pl"), new Email("test3@gmail.com") }, 45));
            db.SaveChanges();
        }
    }
}
