using Microsoft.EntityFrameworkCore;

namespace TecBank.Models
{
    public class TransferenciaContext : DbContext
    {
        public TransferenciaContext(DbContextOptions<TransferenciaContext> options)
            : base(options)
        {
            
        }

        public DbSet<Transferencia> Transferencias { get; set; }
    }
}