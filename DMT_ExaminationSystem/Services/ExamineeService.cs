namespace DMT_ExaminationSystem.Services;

using AutoMapper;
using BCrypt.Net;
using DMT_ExaminationSystem.Entities;
using DMT_ExaminationSystem.Helpers;
using DMT_ExaminationSystem.Models.Examinee;

public interface IExamineeService
{
    IEnumerable<Examinee> GetAll();
    Examinee GetById(int user_id);
    void Create(CreateRequest model);
    void Update(int user_id, UpdateRequest model);
    void Delete(int user_id);
}

public class ExamineeService : IExamineeService
{
    private DataContext _context;
    private readonly IMapper _mapper;

    public ExamineeService(
        DataContext context,
        IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public IEnumerable<Examinee> GetAll()
    {
        return _context.Examinee;
    }

    public Examinee GetById(int user_id)
    {
        return getUser(user_id);
    }

    public void Create(CreateRequest model)
    {

        // validate
        if (_context.Examinee.Any(x => x.examinee_id == model.examinee_id))
            throw new AppException("Examinee with the examinee_id " + model.examinee_id + " already exists");

        // map model to new examinee object
        var examinee = _mapper.Map<Examinee>(model);

        // hash password
       // examinee.PasswordHash = BCrypt.HashPassword(model.Password);

        // save examinee
        _context.Examinee.Add(examinee);
        _context.SaveChanges();
    }

   public void Update(int id, UpdateRequest model)
    {
        var examinee = getUser(id);

        // validate
        if (model.examinee_id != examinee.examinee_id && _context.Examinee.Any(x => x.examinee_id == model.examinee_id))
            throw new AppException("Examinee with the examinee_id " + model.examinee_id + " already exists");

        // hash password if it was entered
       /* if (!string.IsNullOrEmpty(model.Password))
            examinee.PasswordHash = BCrypt.HashPassword(model.Password);*/

        // copy model to examinee and save
        _mapper.Map(model, examinee);
        _context.Examinee.Update(examinee);
        _context.SaveChanges();
    }

    public void Delete(int user_id)
    {
        var examinee = getUser(user_id);
        _context.Examinee.Remove(examinee);
        _context.SaveChanges();
    }

    // helper methods

    private Examinee getUser(int id)
    {
        var examinee = _context.Examinee.Find(id);
        if (examinee == null) throw new KeyNotFoundException("Examinee not found");
        return examinee;
    }
}