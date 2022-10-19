using Microsoft.AspNetCore.Mvc;

namespace DMT_ExaminationSystem.ClientApp.src.components.admin
{
    public class ViewExam : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
