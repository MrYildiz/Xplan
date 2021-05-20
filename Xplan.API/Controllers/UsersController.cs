using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xplan.API.Data;
using Xplan.API.DTOs;
using Xplan.API.Models;

namespace Xplan.API.Controllers
{

    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public UsersController(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        //[AllowAnonymous]
        //[Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InstallerDto>>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();

            var installersToReturn = _mapper.Map<IEnumerable<InstallerDto>>(users);

            return Ok(installersToReturn);
        }

        // GET api/users/2
        //[AllowAnonymous]
        //[Authorize(Roles = "Installer")]
        [HttpGet("{id}")]
        public async Task<ActionResult<InstallerDto>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            return _mapper.Map<InstallerDto>(user);
        }

        // POST api/users
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

