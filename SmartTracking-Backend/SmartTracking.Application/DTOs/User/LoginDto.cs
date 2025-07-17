using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartTracking.Application.DTOs.User
{
    public class LoginDto
    {
        [Required]
        [EmailAddress]
        [MaxLength(100)]
        public required string email { get; set; }
        [Required]
        [MaxLength(50)]
        public required string password { get; set; }
    }
}
