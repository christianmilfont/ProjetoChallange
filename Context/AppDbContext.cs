using Microsoft.EntityFrameworkCore;
using MotoScript_Challange.Mappings;
using MotoScript_Challange.Model;

namespace MotoScript_Challange.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new MotoMapping());
        modelBuilder.ApplyConfiguration(new MotoDefeituosaMapping());

        base.OnModelCreating(modelBuilder);
    }

    public DbSet<Moto> Motos { get; set; }
    public DbSet<MotoDefeituosa> Defeituosas { get; set; }

}