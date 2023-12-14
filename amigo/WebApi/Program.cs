using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("InMemoryDb")
);
builder.Services.SeedData();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();
if (app.Environment.IsDevelopment())
{
app.UseSwagger();
app.UseSwaggerUI();
}

app.UseCors(builder =>{builder
    .WithOrigins("http://localhost:4200")
    .WithMethods("GET", "POST", "PUT", "DELETE")
    .WithHeaders("content-type");
});

// app.UseCors(builder => builder
//     .AllowAnyOrigin()
//     .AllowAnyMethod()
//     .AllowAnyHeader()
// );

app.MapGet("/", () => "Hello World!");


app.MapGet("/api/Books", async (AppDbContext context) => {
    var list = await context.Books.ToListAsync();
    return Results.Ok(list);
});


app.MapGet("/api/Book/{id}", async (int id, AppDbContext context) => {
    var existingBook = await context.Books.FindAsync(id);
    if(existingBook == null){
        return Results.Problem(
            detail: "Brak ksiażki o tym id",
            title: "Błąd"
        );
    }
    return Results.Ok(existingBook);
});


app.MapPost("/api/AddBook", async (Book book, AppDbContext context) => {
    context.Books.Add(book);
    await context.SaveChangesAsync();
    return Results.Created($"/api/AddBook/{book.Id}",book);
});

app.MapPut("/api/UpdateBook/{id}", async (Book book, int id, AppDbContext context) => {
    var existingBook = await context.Books.FindAsync(id);
    existingBook?.updateBook(book);
    await context.SaveChangesAsync();
    return Results.Ok(existingBook);
});

app.MapDelete("/api/DeleteBook/{id}", async (int id, AppDbContext context) => {
    var existingBook = await context.Books.FindAsync(id);
    existingBook?.DeleteBook(context);
    return Results.Ok(existingBook);
});

app.Run();



public class AppDbContext : DbContext {
    public DbSet<Book>Books => Set<Book>();
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options){}

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
        base.OnConfiguring(optionsBuilder);
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Book>(bookBuilder =>
        {
            bookBuilder
            .HasKey(book=>book.Id);
            // bookBuilder
            // .Property(book=>book.Autor)
            // .IsRequired();
        });
     
    }
    
}


static class SeedDataExtensions{
    public static void SeedData(this IServiceCollection serviceCollection)
    {
        var serviceProvider = serviceCollection.BuildServiceProvider();
        var dbContext = serviceProvider.GetRequiredService<AppDbContext>();
        dbContext.AddRange(
            new Book(0, "Dzieci", "Baśń", "Adam Gadam"),
            new Book(0, "Dorośli", "Horror", "Adam Gadam"),
            new Book(0, "Młodzież", "Wampaja", "Joe Mama"),
            new Book(0, "Memes", "Ligma", "Steve Jobs")
           
        );
        dbContext.SaveChanges();
    }
}   

public class Book
{
    public int Id { get; set; }
    public string Tytul { get; set; } = "";
    public string Gatunek { get; set; } = "";
    public string Autor { get; set; } = "";

    private Book() {}

    public Book(int id, string tytul, string gatunek, string autor)
    {
        this.Id = id;
        this.Tytul = tytul;
        this.Gatunek = gatunek;
        this.Autor = autor;
    }

    public void updateBook(Book book){
        this.Tytul = book.Tytul;
        this.Gatunek = book.Gatunek;
        this.Autor = book.Autor;
    }
    public void DeleteBook(AppDbContext context){
        context.Books.Remove(this);
        context.SaveChanges();
    }
}
