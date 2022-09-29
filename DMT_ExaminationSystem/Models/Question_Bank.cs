using System.ComponentModel.DataAnnotations;

namespace DMT_ExaminationSystem.Models
{
    public class Question_Bank
    {
        [Key]
        public int question_id { get; set; }
        public string question { get; set; }
        public string choice_1 { get; set; }
        public string choice_2 { get; set; }
        public string choice_3 { get; set; }
        public string choice_4 { get; set; }
        public string correct_answer { get; set; }
        public int points { get; set; }
        public string image { get; set; }
    }
}
