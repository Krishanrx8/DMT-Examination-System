namespace DMT_ExaminationSystem.Models.Question_Bank;

public class UpdateRequest
{
    public int question_id { get; set; }
    public string question { get; set; }
    public string choice_1 { get; set; }
    public string choice_2 { get; set; }
    public string choice_3 { get; set; }
    public string choice_4 { get; set; }
    public string correct_answer { get; set; }
    public int points { get; set; }
    public string image { get; set; }

    // helpers

    /*private string replaceEmptyWithNull(string value)
    {
        // replace empty string with null to make field optional
        return string.IsNullOrEmpty(value) ? null : value;
    }*/
}