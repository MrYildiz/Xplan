using System.Collections.Generic;

namespace Xplan.API.DTOs
{
    public class InstallerDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Logo { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public ICollection<InstallationDto> Installations { get; set; }
    }
}