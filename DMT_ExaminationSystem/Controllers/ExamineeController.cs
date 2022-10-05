using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using DMT_ExaminationSystem.Models.Examinee;
using DMT_ExaminationSystem.Services;

    [ApiController]
    [Route("[controller]")]
    public class ExamineeController : ControllerBase
    {
        private IExamineeService _examineeService;
        private IMapper _mapper;

        public ExamineeController(
            IExamineeService examineeService,
            IMapper mapper)
        {
            _examineeService = examineeService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _examineeService.GetAll();
            return Ok(users);
        }

        [HttpGet("{examinee_id}")]
        public IActionResult GetById(int examinee_id)
        {
            var user = _examineeService.GetById(examinee_id);
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Create(CreateRequest model)
        {
            _examineeService.Create(model);
            return Ok(new { message = "Examinee created" });
        }

        [HttpPut("{examinee_id}")]
        public IActionResult Update(int examinee_id, UpdateRequest model)
        {
            _examineeService.Update(examinee_id, model);
            return Ok(new { message = "Examinee updated" });
        }

        [HttpDelete("{examinee_id}")]
        public IActionResult Delete(int examinee_id)
        {
            _examineeService.Delete(examinee_id);
            return Ok(new { message = "Examinee deleted" });
        }
    }