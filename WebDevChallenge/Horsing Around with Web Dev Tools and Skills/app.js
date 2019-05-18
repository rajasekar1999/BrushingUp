$(document).ready(function(){
    $('div[id^="number"]').click(function() {
        var num = $(this).attr('value');     
        $('#display').html(num);
        $('#number'+num).css("background-color", "grey");
        setTimeout(function(){
            $('#number'+num).css("background-color", "lemonchiffon");
        }, 100);
    });
  });
