using Microsoft.EntityFrameworkCore;
using MotoScript_Challange.Context;

var builder = WebApplication.CreateBuilder(args);

// Adiciona os controllers
builder.Services.AddControllers();

// Configura Swagger com documentação explícita
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "MotoScript API",
        Version = "v1"
    });
});

// Configura seu DbContext com Oracle (confirme a connection string no appsettings.json)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseOracle(builder.Configuration.GetConnectionString("Oracle")));

var app = builder.Build();

// Middleware Swagger
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "MotoScript API V1");
    c.RoutePrefix = string.Empty; // Swagger na raiz do site
});

// Habilita roteamento e controllers
app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
