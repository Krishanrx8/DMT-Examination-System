using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using DMT_ExaminationSystem.Models.Question_Bank;
using DMT_ExaminationSystem.Services;

[ApiController]
[Route("[controller]")]
public class Question_BankController : ControllerBase
{
    private IQuestionBankService _questionBankService;
    private IMapper _mapper;

    public Question_BankController(
        IQuestionBankService questionBankService,
        IMapper mapper)
    {
        _questionBankService = questionBankService;
        _mapper = mapper;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var users = _questionBankService.GetAll();
        return Ok(users);
    }

    [HttpGet("{question_id}")]
    public IActionResult GetById(int question_id)
    {
        var user = _questionBankService.GetById(question_id);
        return Ok(user);
    }

    [HttpPost]
    public IActionResult Create(CreateRequest model)
    {
        _questionBankService.Create(model);
        return Ok(new { message = "Question created" });
    }

    [HttpPut("{question_id}")]
    public IActionResult Update(int question_id, UpdateRequest model)
    {
        _questionBankService.Update(question_id, model);
        return Ok(new { message = "Question updated" });
    }

    [HttpDelete("{question_id}")]
    public IActionResult Delete(int question_id)
    {
        _questionBankService.Delete(question_id);
        return Ok(new { message = "Question deleted" });
    }
}