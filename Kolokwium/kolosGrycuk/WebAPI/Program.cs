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

if(app.Environment.IsDevelopment())
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


app.MapGet("/api/Samochody",async(AppDbContext dbContext) => {
    var samochod = await dbContext.Samochody.ToListAsync();
    return Results.Ok(samochod);
});

app.MapGet("/api/Samochody/{id}", async(int id,AppDbContext dbContext) => {
    var samochod = await dbContext.Samochody.FindAsync(id);
    return Results.Ok(samochod);
});

app.MapGet("/api/Samochody/:Name", async(string name,AppDbContext dbContext) => {
    var samochod = await dbContext.Samochody.ToListAsync();
    var filter = samochod.FindAll(s=> s.Name == name);
    return filter.Any()?Results.Ok(filter):Results.NotFound();
});

app.MapPost("/api/addSamochod/", async(Samochod samochod, AppDbContext dbContext) => {
    dbContext.Samochody.Add(samochod);
    await dbContext.SaveChangesAsync();
    return Results.Created($"api/addSamochod/{samochod.Id}",samochod);
});

app.MapPut("/api/updateSamochod/{id}", async(Samochod samochod,int id, AppDbContext dbContext) => {
    var existingSamochod = await dbContext.Samochody.FindAsync(id);
    existingSamochod?.updateSamochod(samochod);
    await dbContext.SaveChangesAsync();
    return Results.Ok(existingSamochod);
});

app.MapDelete("/api/deleteSamochod/{id}", async(int id,AppDbContext dbContext) => {
    var existingSamochod = await dbContext.Samochody.FindAsync(id);
    existingSamochod?.deleteSamochod(dbContext);
    return Results.Ok(existingSamochod);
});


app.Run();


public class AppDbContext: DbContext {
    public DbSet<Samochod> Samochody => Set<Samochod>();

    public AppDbContext(DbContextOptions<AppDbContext> options): base(options) {}

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Samochod>(samochodBuilder => 
        samochodBuilder.HasKey(samochod => samochod.Id));
    }
}

static class SeedDataExtensions {
    public static void SeedData(this IServiceCollection serviceCollection){
        var serviceProvider = serviceCollection.BuildServiceProvider();
        var dbContext = serviceProvider.GetRequiredService<AppDbContext>();

        dbContext.AddRange(
            new Samochod(1,"Mercedes","white",1600),
            new Samochod(2,"Opel","black",1850),
            new Samochod(3,"Porsche","red",1450),
            new Samochod(4,"Skoda","blue",2000),
            new Samochod(5,"Seat","orange",1470)
        );
        dbContext.SaveChanges();
    }
}

public class Samochod {

    public int Id {get; set;}

    public string Name {get; set;} = string.Empty;

    public string Color {get;set;} = string.Empty;

    public int Weight {get;set;}

    private Samochod() {}

    public Samochod(int id,string name, string color,int weight){
        this.Id = id;
        this.Name = name;
        this.Color = color;
        this.Weight = weight;
    }

    public void updateSamochod(Samochod samochod) {
        this.Name = samochod.Name;
        this.Color = samochod.Color;
        this.Weight = samochod.Weight;
    }

    public void deleteSamochod(AppDbContext dbContext){
        dbContext.Samochody.Remove(this);
        dbContext.SaveChanges();
    }

}
