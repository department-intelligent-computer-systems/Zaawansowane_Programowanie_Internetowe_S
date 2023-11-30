using System.Reflection.Metadata;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
    builder.Services.AddDbContext<AppDbContext>(
    options =>
    options.UseSqlServer(builder.Configuration
    .GetConnectionString("default"))
);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if(app.Environment.IsDevelopment())
{
    app.SeedData();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/", () => "Hello World! 123");

app.MapGet("/api/contacts", async (AppDbContext context)=> {
    try
    {
    var list = await context.Contacts.ToListAsync();
    return Results.Ok(list.Select(contact=>(ContactDTO)contact));
    }
    catch(Exception e)
    {
    return Results.Problem(
    detail: "Wystpił błąd podczas realizacji tego żądania",
    title: "Błąd"
    );
    }
});

app.MapGet("/api/contacts/{id}", async (int id, AppDbContext context) => {
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

app.MapPost("/api/contacts", async (ContactDTO contact, AppDbContext context) => {
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


app.Run();

public class ContactDTO {
    public int Id {get;set;}
    public string FirstName {get;set;} = String.Empty;
    public string LastName {get;set;} = String.Empty;
    public string Email {get;set;} = String.Empty;
    public int Age {get;set;}
    public Sex Sex {get;set;}

    public static implicit operator Contact(ContactDTO cDTO)
    => new Contact(
    id: cDTO.Id,
    firstName: cDTO.FirstName,
    lastName: cDTO.LastName,
    sex: cDTO.Sex,
    email: cDTO.Email,
    age: cDTO.Age
    );

    public static explicit operator ContactDTO(Contact c)
    => new ContactDTO() {
    Id = c.Id,
    FirstName = c.FirstName,
    LastName = c.LastName,
    Sex = c.Sex,
    Age = c.Age,
    Email = c.Email
    };
}


public enum Sex {Male,Female}
public record Age {
    public int Value {get;}
    public Age(int value) {
        if(value<18 && value<120)
        throw new ArgumentOutOfRangeException();
        Value = value;
    }
    public static implicit operator int(Age age)=>age.Value;
    public static implicit operator Age(int value) => new Age(value);

}

public record Email(string Value) {
    public static implicit operator String(Email email) => email.Value;
    public static implicit operator Email(string text) => new Email(text);
}


public class Contact {
    public int Id {get; private set;}
    public string FirstName {get; private set;} = string.Empty;
    public string LastName {get; private set;} = string.Empty;
    public Sex Sex {get; private set;}
    public Email Email {get; private set;} = null!;
    public Age Age {get; private set;} = null!;
    private Contact() {}
    public Contact(int id, string firstName, string lastName,
        Sex sex, Email email, Age age) {
        this.Id = id;
        this.FirstName =
        String.IsNullOrWhiteSpace(firstName)
        ? throw new ArgumentException()
        : firstName;
        this.LastName =
        String.IsNullOrWhiteSpace(lastName)
        ? throw new ArgumentException()
        : lastName;
        this.Sex = sex;
        this.Email =
        email ?? throw new ArgumentNullException(nameof(email));
        this.Age =
        age ?? throw new ArgumentNullException(nameof(age));
    }
}


class AppDbContext : DbContext {
    public DbSet<Contact> Contacts => Set<Contact>();
    public AppDbContext(DbContextOptions<AppDbContext> options)
    : base(options)
    {}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contact>(contactBuilder=>{
        contactBuilder
        .HasKey(contact=>contact.Id);
        contactBuilder
        .Property(contact => contact.FirstName)
        .IsRequired();
        contactBuilder
        .Property(contact=>contact.LastName)
        .IsRequired();
        });
        modelBuilder.Entity<Contact>().OwnsOne(
        contact=>contact.Email
        ,emailBuilder=>emailBuilder.Property(email=>email.Value)
        );
        modelBuilder.Entity<Contact>().OwnsOne(
        contact=>contact.Age
        ,ageBuilder=>ageBuilder.Property(age=>age.Value)
        );
    }

}


static class SeedDataExtensions {
    public static void SeedData(this IHost app) {
        using(var scope = app.Services.CreateScope())
        {
            scope.ServiceProvider.GetService<AppDbContext>()?.SeedData();
        }
    }
    private static void SeedData(this AppDbContext context) {
        context.Database.EnsureCreated();
        var hasData = context.Contacts.Any();
        if(!hasData) {
            context.Contacts.AddRange(
            new Contact(0,"Ala","Kot",Sex.Female,
            "ala.kot@przyklad.pl", 23),
            new Contact(0,"Tomasz", "Nowak", Sex.Male,
            "tomasz.nowak@przyklad.pl", 34),
            new Contact(0,"Cezary", "Adamski", Sex.Male,
            "cezary.adamski@przyklad.pl",45)
        );
            context.SaveChanges();
        }
    }
}

