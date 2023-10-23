function MostrarTemporadas(idS) {
    $("#Contenido").empty();
    $.ajax({
        type: 'POST',
        datatype: 'JSON',
        url: '/Home/TraerTemporadas',
        data: { IdSerie: idS },
        success: function(response) {
            for (let i = 0; i < response.length; i++) {
                let temporadaDiv = $("<div class='temporada'></div>");
                temporadaDiv.append("<p>" + response[i].NumeroTemporada + "</p>");
                temporadaDiv.append("<h3>" + response[i].Titulo + "</h3>");
                $("#Contenido").append(temporadaDiv);
            }
        }
    });
}


function MostrarActores(idS) {
    $("#Contenido").empty();
    $.ajax({
        type: 'POST',
        datatype: 'JSON',
        url: '/Home/TraerActores',
        data: { IdSerie: idS },
        success: function(response) {
            for (let i = 0; i < response.length; i++) {
                let actorDiv = $("<div class='actor'></div>");
                actorDiv.append("<p>" + response[i].Nombre + "</p>");
                $("#Contenido").append(actorDiv);
            }
        }
    });
}


function MostrarMasInfo(idS) {
    $("#Contenido").empty();
    $.ajax({
        type: 'POST',
        datatype: 'JSON',
        url: '/Home/MasInfo',
        data: { IdSerie: idS },
        success: function(response) {
            $("#Contenido").append("<p>" + response.Nombre + "</p>");
            $("#Contenido").append("<p>" + response.AñoInicio + "</p>");
            $("#Contenido").append("<p>" + response.Sinopsis + "</p>");
            $("#Contenido").append("<img src='/" + response.ImagenSerie + "'>");
        }
    });
}

