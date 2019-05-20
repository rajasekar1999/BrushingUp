$(document).ready(function()
{
    $('div[id^="number"]').click(function() 
    {
        var num = $(this).attr('value');     
        $('#display').html(num);
        $('#number'+num).css("background-color", "grey");
        setTimeout(function()
        {
            $('#number'+num).css("background-color", "lemonchiffon");
        }, 100);
    });

    $('#delete').click(function() 
    {    
        $('#display').html("");
        $('#delete').css("background-color", "aqua");
        setTimeout(function()
        {
            $('#delete').css("background-color", "lemonchiffon");
        }, 100);    
    });

    $('div[id^="operator"]').click(function() 
    {
        var op = $(this).attr('value');
        $('#operator'+op).css("background-color", "orange");
    
        $('#operator5').click(function() 
        {
            setTimeout(function()
            {
                $('#operator'+op).css("background-color", "lemonchiffon");
                $('#operator5').css("background-color", "lemonchiffon");
            }, 100);
        });
    });
});
