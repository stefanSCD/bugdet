using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartTracking.Domain.Entities
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
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
