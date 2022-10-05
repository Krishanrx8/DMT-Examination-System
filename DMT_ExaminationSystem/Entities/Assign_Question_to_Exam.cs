using System.ComponentModel.DataAnnotations;

namespace DMT_ExaminationSystem.Entities
{
    public class Assign_Question_to_Exam
    {
        [Key]
        public int assign_id { get; set; }
        public int exam_id { get; set; }
        public int question_id { get; set; }
        
    }
}
