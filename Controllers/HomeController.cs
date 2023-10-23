using Microsoft.AspNetCore.Mvc;

namespace TP10AJAX.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        ViewBag.Series=BD.ListarSeries();
        return View();
    }

    public List<Temporadas> TraerTemporadas(int IdSerie){
        return BD.ObtenerTemporadas(IdSerie);
    }

    public List<Actores> TraerActores(int IdSerie){
        return BD.ObtenerActores(IdSerie);
    } 

    public Series MasInfo(int IdSerie){
        return BD.ObtenerMasInfo(IdSerie);
    }
}
