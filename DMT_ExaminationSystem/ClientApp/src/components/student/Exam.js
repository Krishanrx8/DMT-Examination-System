using Microsoft.AspNetCore.Mvc;

namespace DMT_ExaminationSystem.ClientApp.src.components.student
{
    public class Exam : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
