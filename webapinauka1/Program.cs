using Microsoft.EntityFrameworkCore;
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

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);


app.MapGet("/", () => "Hello World!");

app.MapGet("/api/Kanapki",async(AppDbContext dbContext)=>{
var kanapka= await dbContext.Kanapkas.ToListAsync();
return Results.Ok(kanapka); 
});

app.MapGet("/api/Kanapki/{id}",async(int id, AppDbContext dbContext)=>{
var kanapka= await dbContext.Kanapkas.FindAsync(id);
return Results.Ok(kanapka); 
});

app.MapGet("/api/Kanapki/:Name",async(string name, AppDbContext dbContext)=>{
var kanapka = await dbContext.Kanapkas.ToListAsync();
var filter = kanapka.FindAll(n=>n.Name==name);
return filter.Any()?Results.Ok(filter):Results.NotFound();
});

app.MapPost("/api/addKanapki",async(Kanapka kanapka, AppDbContext dbContext)=>{
    dbContext.Kanapkas.Add(kanapka);
    await dbContext.SaveChangesAsync();
    return Results.Created($"api/addKanapki/{kanapka.Id}",kanapka);
});

app.MapPut("/api/updateKanapki/{id}",async(Kanapka kanapka,int id, AppDbContext dbContext)=>{
    var existingkanapka= await dbContext.Kanapkas.FindAsync(id);
    existingkanapka?.updateKanapka(kanapka);
    await dbContext.SaveChangesAsync();
    return Results.Ok(existingkanapka);
});
app.MapDelete("/api/deleteKanapki/{id}",async(int id, AppDbContext dbContext)=>{
    var existingkanapka= await dbContext.Kanapkas.FindAsync(id);
    existingkanapka?.deleteKanapka(dbContext);
    return Results.Ok(existingkanapka);
});
app.Run();
public class AppDbContext : DbContext
{
    public DbSet<Kanapka> Kanapkas => Set<Kanapka>();
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Kanapka>(kanapkaBuilder =>
        kanapkaBuilder.HasKey(kanapka => kanapka.Id));
    }
}
static class SeedDataExtensions
{
    public static void SeedData(this IServiceCollection serviceCollection)
    {
        var serviceProvider = serviceCollection.BuildServiceProvider();
        var dbContext = serviceProvider.GetRequiredService<AppDbContext>();
        dbContext.AddRange(
            new Kanapka(1, "studencka", 2, Typ.weganska),
            new Kanapka(2, "studenckaaaa", 4, Typ.weganska)
        );
        dbContext.SaveChanges();
    }
}
public enum Typ
{
    weganska,
    wegetarianska
}
public class Kanapka
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Weight { get; set; }
    public Typ Typ { get; set; }

    private Kanapka() { }
    public Kanapka(int id, string name, int weight, Typ typ)
    {
        this.Id = id;
        this.Name = name;
        this.Weight = weight;
        this.Typ = typ;
    }
        public void updateKanapka(Kanapka kanapka)
    {
        this.Name = kanapka.Name;
        this.Weight = kanapka.Weight;
        this.Typ = kanapka.Typ;
    }
        public void deleteKanapka(AppDbContext dbContext)
    {
        dbContext.Kanapkas.Remove(this);
        dbContext.SaveChanges();
    }
}
