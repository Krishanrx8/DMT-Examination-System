using System.ComponentModel.DataAnnotations;

namespace DMT_ExaminationSystem.Entities
{
    public class Exam_Result
    {
        [Key]
        public int result_id { get; set; }
        public int exam_id { get; set; }
        public int examinee_id { get; set; }
        public int score { get; set; }
        public int status { get; set; }
    }
}
