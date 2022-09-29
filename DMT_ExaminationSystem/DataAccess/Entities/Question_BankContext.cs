using System.Collections.Generic;
using DMT_ExaminationSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace DMT_ExaminationSystem.DataAccess.Entities
{
    public class Question_BankContext : DbContext
    {
        public Question_BankContext(DbContextOptions<Question_BankContext> context) : base(context)
        {
        }
        public DbSet<Question_Bank> Question_Bank { get; set; }
    }
}