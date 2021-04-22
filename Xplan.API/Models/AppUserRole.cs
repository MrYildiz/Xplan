using Microsoft.AspNetCore.Identity;

namespace Xplan.API.Models
{
    public class AppUserRole : IdentityUserRole<int>
    {
        // Deze class voor de many to many relatie / join entities. een rol kan meerdere users en en een user meerdere rollen
        public AppUser User { get; set; }
        public AppRole Role { get; set; }
    }
}