using System.ComponentModel.DataAnnotations;

namespace DMT_ExaminationSystem.Entities;
public class Admin
{
    [Key]
    public int admin_id { get; set; }
    public int user_id { get; set; }
}