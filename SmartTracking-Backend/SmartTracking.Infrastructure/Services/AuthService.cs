using Microsoft.EntityFrameworkCore;
using SmartTracking.Application.DTOs.User;
using SmartTracking.Application.Services;
using SmartTracking.Domain.Entities;
using SmartTracking.Infrastructure.Persistence;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace SmartTracking.Infrastructure.Services
{
    public class AuthService : IAuthService
    {
        private readonly SmartTrackerDbContext _db;
        public AuthService(SmartTrackerDbContext db)
        {
            _db = db;
        }

        public string GenerateJwtToken(string email, string role)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("MySuperSecretKey12345!@#$%ˆ&*()MySuperSecretKey12345!@#$%ˆ&*()");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Email, email),
                    new Claim(ClaimTypes.Role, role)
                 }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public async Task<string?> LoginAsync(string email, string password)
        {
            var user = await _db.Users.FirstOrDefaultAsync(u => u.email == email);
            if (user == null)
            {
                return null;
            }

            if (user.password != password)
            {
                return null;
            }

            return GenerateJwtToken(user.email, "User");
        }

        public async Task RegisterAsync(CreateUserDto dto)
        {
            var existingUser = await _db.Users.FirstOrDefaultAsync(u => u.email == dto.email);
            if (existingUser != null)
            {
                throw new Exception("Email already exists!");
            }
            var user = new User
            {
                username = dto.username,
                password = dto.password,
                email = dto.email
            };
            _db.Users.Add(user);
            await _db.SaveChangesAsync();
        }
    }
}
