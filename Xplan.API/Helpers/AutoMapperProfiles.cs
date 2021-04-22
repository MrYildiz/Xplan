using AutoMapper;
using Xplan.API.DTOs;
using Xplan.API.Models;

namespace Xplan.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            // Where to map from and where to map to
            CreateMap<AppUser, InstallerDto>();
            CreateMap<RegisterDto, AppUser>();

        }
    }
}