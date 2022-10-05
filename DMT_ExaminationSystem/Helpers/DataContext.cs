namespace DMT_ExaminationSystem.Helpers;

using Microsoft.EntityFrameworkCore;
using DMT_ExaminationSystem.Entities;

public class DataContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public DataContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlServer(Configuration.GetConnectionString("DMTDBConnection"));
    }

    public DbSet<User> User { get; set; }
    public DbSet<Admin> Admin { get; set; }
    public DbSet<Assign_Exam_to_Student> Assign_Exam_to_Student { get; set; }
    public DbSet<Assign_Question_to_Exam> Assign_Question_to_Exam { get; set; }
    public DbSet<Exam> Exam { get; set; }
    public DbSet<Exam_Result> Exam_Result { get; set; }
    public DbSet<Examinee> Examinee { get; set; }
    public DbSet<Question_Bank> Question_Bank { get; set; }

}