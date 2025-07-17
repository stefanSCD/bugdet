using System.ComponentModel.DataAnnotations;

namespace SmartTracking.Application.DTOs.User
{
    public class CreateUserDto
    {
        [Required]
        [MaxLength(50)]
        public required string username { get; set; }
        [Required]
        [MaxLength(50)]
        public required string password { get; set; }
        [Required]
        [EmailAddress]
        [MaxLength(100)]
        public required string email { get; set; }
    }
}
