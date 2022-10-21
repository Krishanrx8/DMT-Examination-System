using System.Text.Json.Serialization;
using DMT_ExaminationSystem.Helpers;
using DMT_ExaminationSystem.Services;

var builder = WebApplication.CreateBuilder(args);
{
    var services = builder.Services;
    var env = builder.Environment;

    builder.WebHost.ConfigureKestrel(serverOptions =>
    {
        serverOptions.Limits.MaxRequestBodySize = int.MaxValue;
        serverOptions.Limits.MinResponseDataRate = null;
        serverOptions.ConfigureEndpointDefaults(lo => lo.Protocols = Microsoft.AspNetCore.Server.Kestrel.Core.HttpProtocols.Http1);
    });

    services.AddDbContext<DataContext>();
    services.AddCors();
    services.AddControllers().AddJsonOptions(x =>
    {
        x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

        // ignore omitted parameters on models to enable optional params (e.g. User update)
        x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    });
    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
    services.AddAuthentication("Identity.Application")
      .AddCookie();

    // configure DI for application services
    services.AddScoped<IUserService, UserService>();
    services.AddScoped<IQuestionBankService, QuestionBankService>();
}

var app = builder.Build();

{
    app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

    app.UseMiddleware<ErrorHandlerMiddleware>();
    app.UseAuthentication();
    app.UseAuthorization();
    app.MapControllers();
}

app.Run();
