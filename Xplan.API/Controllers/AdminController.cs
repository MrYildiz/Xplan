using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xplan.API.Data;
using Xplan.API.DTOs;
using Xplan.API.Models;

namespace Xplan.API.Controllers
{
    public class AdminController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        
        public AdminController(UserManager<AppUser> userManager, DataContext context, IMapper mapper)
        {
            _userManager = userManager;
            _context = context;
            _mapper = mapper;
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("users-with-roles")]
        public ActionResult GetUsersWithRoles()
        {
            return Ok("Text for admin");
        }

        //admin/installers getInstallers
        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("installers")]
        public async Task<ActionResult> GetInstallers()
        {
            var users = await _userManager.GetUsersInRoleAsync("Installer");

            var installersToReturn = _mapper.Map<IEnumerable<InstallerDto>>(users);

            return Ok(installersToReturn);
        }
/**
        var users = await _context.Users.ToListAsync();
        var installersToReturn = _mapper.Map<IEnumerable<InstallerDto>>(users);
        return Ok(installersToReturn);

           
             .FindByIdAsync(rol) .Users
                .Include(r => r.UserRoles.Contains(RoleId = 2))
                .ToListAsync();

**/

    }
}