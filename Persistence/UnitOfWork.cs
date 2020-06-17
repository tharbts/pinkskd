using System.Threading.Tasks;
using pinkskd.Persistence;
using pinkskd.Persistence.Interface;

namespace pinkskd.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DatabaseContext context;

        public UnitOfWork(DatabaseContext context)
        {
            this.context = context;
        }

        public async Task CompleteAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}