using System.Threading.Tasks;
using Xplan.API.Models;

namespace Xplan.API.Interfaces
{
    public interface ITokenService
    {
         Task<string> CreateToken(AppUser user);
    }
}