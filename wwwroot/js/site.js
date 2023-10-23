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
                temporadaDiv.append("<p>" + response[i].numeroTemporada + "</p>");
                temporadaDiv.append("<h3>" + response[i].titulo + "</h3>");
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
                actorDiv.append("<p>" + response[i].nombre + "</p>");
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
            $("#Contenido").append("<p>" + response.nombre + "</p>");
            $("#Contenido").append("<p>" + response.añoInicio + "</p>");
            $("#Contenido").append("<p>" + response.sinopsis + "</p>");
            $("#Contenido").append("<img src='/" + response.imagenSerie + "'>");
        }
    });
}

