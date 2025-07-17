using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartTracking.Application.DTOs.User;
using SmartTracking.Domain.Entities;
using SmartTracking.Infrastructure.Persistence;

namespace SmartTracking.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly SmartTrackerDbContext _db;
        public UserController(SmartTrackerDbContext db)
        {
            _db = db;
        }

        [HttpGet("get-by-email/{email}")]
        public async Task<IActionResult> GetUserByEmail(string email)
        {
            var user = await _db.Users.FirstOrDefaultAsync(u => u.email == email);
            if (user == null)
            {
                return NotFound($"User with email {email} not found.");
            }

            var result = new
            {
                user.username,
                user.email
            };

            return Ok(result);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await _db.Users.ToListAsync();
            return Ok(users);
        }
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(CreateUserDto dto)
        {
            var user = new User
            {
                email = dto.email,
                username = dto.username,
                password = dto.password
            };
            _db.Users.Add(user);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUsers), new { id = user.id }, user);
        }
    }
}
