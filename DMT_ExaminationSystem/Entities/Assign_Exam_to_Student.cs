using Microsoft.EntityFrameworkCore;

namespace DMT_ExaminationSystem.Entities
{
    [Keyless]
    public class Assign_Exam_to_Student
    {
        public int exam_id { get; set; }
        public int examinee_id { get; set; }
    }
}
