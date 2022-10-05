using System.ComponentModel.DataAnnotations;

namespace DMT_ExaminationSystem.Entities
{
    public class Examinee
    {
        [Key]
        public int examinee_id { get; set; }
        public string nic_no { get; set; }
        public string avatar { get; set; }
        public string username { get; set; }
    }
}
