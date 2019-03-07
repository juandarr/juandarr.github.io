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

    var colors = ['coral', 'cornflowerblue', 'crimson','deepskyblue','gold','darkseagreen'];
    var random_color;
    var x = document.getElementsByClassName('cardjig');
    var i;
    for (i = 0; i < x.length; i++) {
        random_color = colors[Math.floor(Math.random() * colors.length)];
        x[i].style.background = random_color;
    }  

    $('.cardjig').hover(function(){
        $(this).transition({
            animation  : 'jiggle',
            duration   : '1s'
            });
    }, function(){});
});

