namespace DMT_ExaminationSystem.Models.Question_Bank;

using System.ComponentModel.DataAnnotations;

public class CreateRequest
{
    [Required]
    public int question_id { get; set; }

    [Required]
    public string question { get; set; }

    [Required]
    public string choice_1 { get; set; }

    [Required]
    public string choice_2 { get; set; }

    [Required]
    public string choice_3 { get; set; }

    [Required]
    public string choice_4 { get; set; }

    [Required]
    public string correct_answer { get; set; }

    [Required]
    public int points { get; set; }

    [Required]
    public string image { get; set; }
}