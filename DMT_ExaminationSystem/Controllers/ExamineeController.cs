using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DMT_ExaminationSystem.DataAccess.Entities;

namespace DMT_ExaminationSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExamineeController : ControllerBase
    {
        private readonly ExamineeContext _ExamineeContext;
        public ExamineeController(ExamineeContext ExamineeContext)
        {
            _ExamineeContext = ExamineeContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var examinees = await _ExamineeContext.Examinee.ToListAsync();
            Console.Write(examinees);
            return Ok(examinees);
        }
    }
}
