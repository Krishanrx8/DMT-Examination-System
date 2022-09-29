using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DMT_ExaminationSystem.Models
{
    public class Examinee
    {
        [Key]
        public int examinee_id { get; set; }
        public string nic_no { get; set; }
        public string avatar { get; set; }
        public int user_id { get; set; }
    }
}