using System.Collections.Generic;
using DMT_ExaminationSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace DMT_ExaminationSystem.DataAccess.Entities
{
    public class ExamineeContext : DbContext
    {
        public ExamineeContext(DbContextOptions<ExamineeContext> context) : base(context)
        {
        }
        public DbSet<Examinee> Examinee { get; set; }
    }
}