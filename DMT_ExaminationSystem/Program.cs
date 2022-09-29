using DMT_ExaminationSystem.Controllers;
using DMT_ExaminationSystem.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<ExamineeContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DMTDBConnection"));
});
builder.Services.AddDbContext<Question_BankContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DMTDBConnection"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
   // app.UseSwagger();
   // app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
