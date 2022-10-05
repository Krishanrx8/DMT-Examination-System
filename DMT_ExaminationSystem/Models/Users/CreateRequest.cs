namespace DMT_ExaminationSystem.Models.Users;

using System.ComponentModel.DataAnnotations;
using DMT_ExaminationSystem.Entities;

public class CreateRequest
{
    [Required]
    public string full_name { get; set; }

    [Required] 
    public string avatar { get; set; }

    [Required]
    public string username { get; set; }

    [Required]
    public string password { get; set; }

    [Required]
    public int phone_number { get; set; }

    [Required]
    public string email { get; set; }

    [Required]
    public int user_type { get; set; }
}