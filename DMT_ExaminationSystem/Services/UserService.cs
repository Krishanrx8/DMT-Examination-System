namespace DMT_ExaminationSystem.Services;

using AutoMapper;
using BCrypt.Net;
using DMT_ExaminationSystem.Entities;
using DMT_ExaminationSystem.Helpers;
using DMT_ExaminationSystem.Models.Users;

public interface IUserService
{
    IEnumerable<User> GetAll();
    User GetById(int user_id);
    void Create(CreateRequest model);
    void Update(int user_id, UpdateRequest model);
    User Authenticate(AuthenticateRequest model);
    void Delete(int user_id);
}

public class UserService : IUserService
{
    private DataContext _context;
    private readonly IMapper _mapper;

    public UserService(
        DataContext context,
        IMapper mapper) 
    {
        _context = context;
        _mapper = mapper;
    }

    public IEnumerable<User> GetAll()
    {
        return _context.User;
    }

    public User GetById(int user_id)
    {
        return getUser(user_id);
    }

    public void Create(CreateRequest model)
    {

        // validate
        if (_context.User.Any(x => x.username == model.username))
            throw new AppException("User with the email " + model.email + " already exists");

        // map model to new user object
        var user = _mapper.Map<User>(model);

        // hash password
       // user.PasswordHash = BCrypt.HashPassword(model.Password);

        // save user
        _context.User.Add(user);
        _context.SaveChanges();
    }

   public void Update(int id, UpdateRequest model)
    {
        var user = getUser(id);

        // validate
        if (model.email != user.email && _context.User.Any(x => x.email == model.email))
            throw new AppException("User with the email " + model.email + " already exists");

        // hash password if it was entered
       /* if (!string.IsNullOrEmpty(model.Password))
            user.PasswordHash = BCrypt.HashPassword(model.Password);*/

        // copy model to user and save
        _mapper.Map(model, user);
        _context.User.Update(user);
        _context.SaveChanges();
    }

    public User Authenticate(AuthenticateRequest model)
    {
        // var user = _context.User.SingleOrDefault(x => x.username == model.username);
        var user = _context.User.Where(x => x.username.Equals(model.username) &&
                      x.password.Equals(model.password)).FirstOrDefault();
        // validate
        if (user == null)
            throw new AppException("Username or password is incorrect");

        // authentication successful
        var response = _mapper.Map<User>(user);
        return response;
    }

    public void Delete(int user_id)
    {
        var user = getUser(user_id);
        _context.User.Remove(user);
        _context.SaveChanges();
    }

    // helper methods

    private User getUser(int id)
    {
        var user = _context.User.Find(id);
        if (user == null) throw new KeyNotFoundException("User not found");
        return user;
    }
}