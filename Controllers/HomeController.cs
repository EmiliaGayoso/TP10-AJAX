using Microsoft.AspNetCore.Mvc;

namespace TP10-AJAX.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
