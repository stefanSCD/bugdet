using SmartTracking.Application.DTOs.User;

namespace SmartTracking.Application.Services
{
    public interface IAuthService
    {
        Task RegisterAsync(CreateUserDto dto);
        Task<string?> LoginAsync(string email, string password);
        string GenerateJwtToken(string email, string role);
    }
}
