using Microsoft.EntityFrameworkCore;
using SmartTracking.Domain.Entities;

namespace SmartTracking.Infrastructure.Persistence
{
    public class SmartTrackerDbContext : DbContext
    {
        public SmartTrackerDbContext(DbContextOptions<SmartTrackerDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
