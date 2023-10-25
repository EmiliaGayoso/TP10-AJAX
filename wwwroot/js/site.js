function MostrarTemporadas(idS) {
    $("#Contenido").empty();
    $.ajax({
        type: 'POST',
        datatype: 'JSON',
        url: '/Home/TraerTemporadas',
        data: { IdSerie: idS },
        success: function(response) {
            $(".modal-title").html("Temporadas")
            for (let i = 0; i < response.length; i++) {
                let temporadaDiv = $("<div class='temporada'></div>");
                temporadaDiv.append("<p>Temporada " + response[i].numeroTemporada + "</p>");
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
            $(".modal-title").html("Actores")
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
            $(".modal-title").html("Mas info")
            $("#Contenido").append("<p><b>Nombre:</b> " + response.nombre + "</p>");
            $("#Contenido").append("<p><b>Año de inicio:</b> " + response.añoInicio + "</p>");
            $("#Contenido").append("<p><b>Sinopsis:</b> " + response.sinopsis + "</p>");
        }
    });
}

