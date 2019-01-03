$(document).ready(function() {

    $('#buscar').onclick(function(e) {
        src="https://www.googleapis.com/customsearch/v1?key=AIzaSyDXW6DrmLJZR6EnXtvTgeS4Q1BCXH46bqE&cx=017576662512468239146:omuauf_lfve&q=¨" + $('#query').val() + "&callback=hndlr"

        function hndlr(response) {
            for (var i = 0; i < response.items.length; i++) {
              var item = response.items[i];
              // in production code, item.htmlTitle should have the HTML entities escaped.
              document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
            }
          }
    });







});