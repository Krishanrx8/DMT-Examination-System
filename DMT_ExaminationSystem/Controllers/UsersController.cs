using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using DMT_ExaminationSystem.Models.Users;
using DMT_ExaminationSystem.Services;

[ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        private IMapper _mapper;

        public UsersController(
            IUserService userService,
            IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }

        [HttpGet("{user_id}")]
        public IActionResult GetById(int user_id)
        {
            var user = _userService.GetById(user_id);
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Create(CreateRequest model)
        {
            _userService.Create(model);
            return Ok(new { message = "User created" });
        }

        [HttpPut("{user_id}")]
        public IActionResult Update(int user_id, UpdateRequest model)
        {
            _userService.Update(user_id, model);
            return Ok(new { message = "User updated" });
        }

        [HttpDelete("{user_id}")]
        public IActionResult Delete(int user_id)
        {
            _userService.Delete(user_id);
            return Ok(new { message = "User deleted" });
        }
    }