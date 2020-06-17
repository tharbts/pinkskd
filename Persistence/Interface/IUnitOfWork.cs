using System.Threading.Tasks;

namespace pinkskd.Persistence.Interface
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}