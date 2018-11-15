$(function(){
/*    
    window.onunload = function(){};//Firefoxにも適用する場合には記述する
    history.forward();
*/

    window.onunload = function(){location.replace(document.location);};


    $('#BTN_1').click(function(){
        $('#TXT_2').val($('#TXT_1').val());
    });
});