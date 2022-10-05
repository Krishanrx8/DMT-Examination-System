using System.ComponentModel.DataAnnotations;

namespace DMT_ExaminationSystem.Entities
{
    public class Exam
    {
        [Key]
        public int exam_id { get; set; }
        public int admin_id { get; set; }
        public string instruction { get; set; }
        public DateTime date { get; set; }
        public DateTime time { get; set; }
        public DateTime start_time { get; set; }
        public DateTime end_time { get; set; }
        public int timer_in_minutes  { get; set; }

    }
}
