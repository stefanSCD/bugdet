using Microsoft.AspNetCore.Mvc;
using SmartTracking.Application.DTOs.User;
using SmartTracking.Application.Services;

namespace SmartTracking.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(CreateUserDto dto) {
            try
            {
                await _authService.RegisterAsync(dto);
                return Ok("User registered successfully."); 
            }
            catch (Exception ex)
            {
                return BadRequest($"Error registering user: {ex.Message}");
            }   
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            try
            {
                var token = await _authService.LoginAsync(dto.email, dto.password);
                if (token == null)
                {
                    return Unauthorized("Invalid email or password.");
                }
                return Ok(new { token });
            }
            catch (Exception ex)
            {
                return BadRequest($"Error logging in: {ex.Message}");
            }
        }
    }
}
