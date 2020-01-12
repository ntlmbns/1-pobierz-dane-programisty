$(document).ready( function() {
    console.log('ready');
   });
   
   $('body').append('<button id="btn">Pobierz dane</button>');
   
   $('#btn').click(function() {
     // create div
     $('#btn').after('<div id="dane-programisty"></div>');
     // fetch json
     $.ajax({
       url:'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
       dataType: 'json',
       success: function (resultJSON) {
         console.log(resultJSON);
         // display data
         $("#dane-programisty").append('Imie: ' + resultJSON.imie +'<br>');
         $("#dane-programisty").append('Nazwisko: ' + resultJSON.nazwisko +'<br>');
         $("#dane-programisty").append('Zawod: ' + resultJSON.zawod +'<br>');
         $("#dane-programisty").append('Firma: ' + resultJSON.firma +'<br>');
       },
       onerror: function (msg) {
         console.log(msg);
       }
     });
   });
   
