using Xplan.API.Models;

namespace Xplan.API.Interfaces
{
    public interface ITokenService
    {
         string CreateToken(AppUser user);
    }
}