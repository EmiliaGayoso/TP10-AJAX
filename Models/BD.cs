using System.Data.SqlClient;
using Dapper;
public class BD
{
    private static string ConnectionString = @"Server=localhost;DataBase=BDSeries;Trusted_Connection=True;";
    public static List<Series> ListarSeries(){
        List <Series> ListSeries = new List<Series>();
        using (SqlConnection db = new SqlConnection(ConnectionString)){
            string sql = "SELECT * FROM Series";
            ListSeries = db.Query<Series>(sql).ToList();
        }
        return ListSeries;
    }

    public static List<Temporadas> ObtenerTemporadas(int IdSerie){
        List <Temporadas> ListTemporadas = new List<Temporadas>();
        using (SqlConnection db = new SqlConnection(ConnectionString)){
            string sql = "SELECT * FROM Temporadas WHERE IdSerie=@IdSerie";
            ListTemporadas = db.Query<Temporadas>(sql).ToList();
        }
        return ListTemporadas;
    }

    public static List<Actores> ObtenerActores(int IdSerie){
        List <Actores> ListActores = new List<Actores>();
        using (SqlConnection db = new SqlConnection(ConnectionString)){
            string sql = "SELECT * FROM Actores WHERE IdSerie=@IdSerie";
            ListActores = db.Query<Actores>(sql).ToList();
        }
        return ListActores;
    }
    public static Series ObtenerMasInfo(int IdSerie){
        Series ListMasInfo = new Series();
        using (SqlConnection db = new SqlConnection(ConnectionString)){
            string sql = "SELECT * FROM Series WHERE IdSerie=@IdSerie";
            ListMasInfo = db.QueryFirstOrDefault<Series>(sql);
        }
        return ListMasInfo;
    }

}