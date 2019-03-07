/*
var x = document.getElementsByClassName("cardjig");
var i;
for (i = 0; i < x.length; i++) {
  x[i].addEventListener("mouseover", jiggle);
} 

function jiggle() {
	var x = document.getElementsByClassName("cardjig");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].transition('jiggle');
    } 
}*/

$(document).ready(function() {

    //var colors = ['coral', 'cornflowerblue', 'crimson','deepskyblue','gold','darkseagreen'];
    var colors =['#4CC8C3','#FFF761','#B254D0','#FFA761','#63cff3','cornflowerblue','darkseagreen']
    var random_color;

    var x = document.getElementsByClassName('cardjig');
    var i;
    for (i = 0; i < x.length; i++) {
        random_color = colors[Math.floor(Math.random() * colors.length)];
        x[i].style.background = random_color;
    }  

    $('.cardjig').hover(function(){
        $(this).transition({
            animation  : 'pulse'
            //duration   : '1s'
            });
    }, function(){});
});

