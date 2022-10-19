using Microsoft.AspNetCore.Mvc;

namespace DMT_ExaminationSystem.ClientApp.src.components.admin
{
    public class AdminHome : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
