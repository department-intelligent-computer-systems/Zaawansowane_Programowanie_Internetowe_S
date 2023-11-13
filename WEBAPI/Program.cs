using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(
    options =>
        options.UseSqlServer(builder.Configuration
                                .GetConnectionString("default"))
);

var app = builder.Build();

if(app.Environment.IsDevelopment())
{
    app.SeedData();
}

app.MapGet("/", () => "Hello World!");

app.Run();

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

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){}

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
                    "cezary.adamski@przyklad.pl",45));
            context.SaveChanges();
        }
    }
}