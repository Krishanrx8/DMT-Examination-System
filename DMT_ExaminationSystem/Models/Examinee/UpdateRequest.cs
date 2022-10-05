namespace DMT_ExaminationSystem.Models.Examinee;

public class UpdateRequest
{
    public int examinee_id { get; set; }
    public string nic_no { get; set; }
    public string avatar { get; set; }
    public string username { get; set; }

    // helpers

    /*private string replaceEmptyWithNull(string value)
    {
        // replace empty string with null to make field optional
        return string.IsNullOrEmpty(value) ? null : value;
    }*/
}