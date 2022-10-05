namespace DMT_ExaminationSystem.Services;

using AutoMapper;
using BCrypt.Net;
using DMT_ExaminationSystem.Entities;
using DMT_ExaminationSystem.Helpers;
using DMT_ExaminationSystem.Models.Question_Bank;

public interface IQuestionBankService
{
    IEnumerable<Question_Bank> GetAll();
    Question_Bank GetById(int user_id);
    void Create(CreateRequest model);
    void Update(int user_id, UpdateRequest model);
    void Delete(int user_id);
}

public class QuestionBankService : IQuestionBankService
{
    private DataContext _context;
    private readonly IMapper _mapper;

    public QuestionBankService(
        DataContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public IEnumerable<Question_Bank> GetAll()
    {
        return _context.Question_Bank;
    }

    public Question_Bank GetById(int user_id)
    {
        return getUser(user_id);
    }

    public void Create(CreateRequest model)
    {

        // validate
        if (_context.Question_Bank.Any(x => x.question_id == model.question_id))
            throw new AppException("Question_Bank with the question_id '" + model.question_id + "' already exists");

        // map model to new question object
        var question = _mapper.Map<Question_Bank>(model);

        // hash password
       // question.PasswordHash = BCrypt.HashPassword(model.Password);

        // save question
        _context.Question_Bank.Add(question);
        _context.SaveChanges();
    }

   public void Update(int id, UpdateRequest model)
    {
        var question = getUser(id);

        // validate
        if (model.question_id != question.question_id && _context.Question_Bank.Any(x => x.question_id == model.question_id))
            throw new AppException("Question_Bank with the question_id '" + model.question_id + "' already exists");

        // hash password if it was entered
       /* if (!string.IsNullOrEmpty(model.Password))
            question.PasswordHash = BCrypt.HashPassword(model.Password);*/

        // copy model to question and save
        _mapper.Map(model, question);
        _context.Question_Bank.Update(question);
        _context.SaveChanges();
    }

    public void Delete(int user_id)
    {
        var question = getUser(user_id);
        _context.Question_Bank.Remove(question);
        _context.SaveChanges();
    }

    // helper methods

    private Question_Bank getUser(int id)
    {
        var question = _context.Question_Bank.Find(id);
        if (question == null) throw new KeyNotFoundException("Question_Bank not found");
        return question;
    }
}