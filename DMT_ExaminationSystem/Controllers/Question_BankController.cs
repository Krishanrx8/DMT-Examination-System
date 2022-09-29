using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DMT_ExaminationSystem.DataAccess.Entities;
using DMT_ExaminationSystem.Models;

namespace DMT_ExaminationSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Question_BankController : ControllerBase
    {
        private readonly Question_BankContext _Question_BankContext;
        public Question_BankController(Question_BankContext Question_BankContext)
        {
            _Question_BankContext = Question_BankContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Question_Bank>>> GetQuestions()
        {
            return await _Question_BankContext.Question_Bank.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Question_Bank>> GetQuestions(int id)
        {
            var questions = await _Question_BankContext.Question_Bank.FindAsync(id);

            if (questions == null)
            {
                return NotFound();
            }

            return questions;
        }
    }
}
