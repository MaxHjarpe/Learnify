using Entity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class StoreContext : DbContext
    {
        
        public StoreContext(DbContextOptions options) : base(options) 
        {
                
        } 

        public DbSet<Course> Courses { get; set; }
    }
}