namespace DMT_ExaminationSystem.Models.Examinee;

using System.ComponentModel.DataAnnotations;

public class CreateRequest
{
    [Required]
    public int examinee_id { get; set; }
    [Required]
    public string nic_no { get; set; }
    [Required]
    public string avatar { get; set; }
    [Required]
    public string username { get; set; }
}