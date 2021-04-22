using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Xplan.API.Models
{
    public class AppUser : IdentityUser<int>
    {
        //public Address Adres { get; set; }
        //public string Comment { get; set; }
        //public string InstallationDetails { get; set; }
        //public DateTime DateOfInstallation { get; set; }

        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}