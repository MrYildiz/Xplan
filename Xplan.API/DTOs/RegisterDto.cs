using System.ComponentModel.DataAnnotations;

namespace Xplan.API.DTOs
{
    public class RegisterDto
    {
        [Required] // check of username in body niet null is. Kun op meer plaatsen maar dit is beste plek. [ApiController] maakt dit mogelijk
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}