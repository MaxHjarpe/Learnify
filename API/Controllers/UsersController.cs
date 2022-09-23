using System.Threading.Tasks;
using API.Dto;
using API.ErrorResponse;
using Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsersController : BaseController
    {
        private readonly UserManager<User> _userManager;
        public UsersController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null && !await _userManager.CheckPasswordAsync(user, loginDto.Password)) {
                return Unauthorized(new ApiResponse(401));
            }
            return user;
        }
    }
}