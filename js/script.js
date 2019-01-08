$(document).ready(function() {

    $('#buscar').click(function(e) {
        
        var query = $('#query').val();
        query = query.replace((String.fromCharCode(34),"'"));
        console.log(query);
        var busqueda = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDXW6DrmLJZR6EnXtvTgeS4Q1BCXH46bqE&cx=017576662512468239146:omuauf_lfve&q=" + query;
        $.ajax({
            datatype:"JSON",
            url: busqueda,
            success: function(data) {
                
                var resultado = data;
                console.log(resultado.items.lenght);
                for(i=0;i<10;i++){
                    console.log(resultado.items[i]);
                    
                $('#resultado').append("Resultado " + resultado.items[i].link + "<br>");

                }
                
            }

        });

    });







});