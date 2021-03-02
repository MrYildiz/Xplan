using Microsoft.EntityFrameworkCore;
using Xplan.API.Models;

namespace Xplan.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<AppUser> Users { get; set; }


    }
}