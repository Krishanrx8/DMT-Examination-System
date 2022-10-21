namespace DMT_ExaminationSystem.Entities;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class Login
{
    public string username { get; set; }
    public string password { get; set; }
}
