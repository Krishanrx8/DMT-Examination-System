namespace DMT_ExaminationSystem.Models.Users;

public class AuthenticateResponse
{
    public int user_id { get; set; }
    public string full_name { get; set; }
    public string avatar { get; set; }
    public string username { get; set; }
    public string password { get; set; }
    public int phone_number { get; set; }
    public string email { get; set; }
    public int user_type { get; set; }
}