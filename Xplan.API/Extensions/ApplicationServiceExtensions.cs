using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Xplan.API.Data;
using Xplan.API.Interfaces;
using Xplan.API.Services;

namespace Xplan.API.Extensions
{
    public static class ApplicationServiceExtensions //static omdat je geen nieuwe instance van deze class hoeft te maken
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddDbContext<DataContext>(x => x.UseSqlite(config.GetConnectionString("DefaultConnection")));

            return services;
        }
    }
}