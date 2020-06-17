using Microsoft.EntityFrameworkCore;
using pinkskd.Models;

namespace pinkskd.Persistence
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Schedule> Schedules { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=database.db");
    }
}