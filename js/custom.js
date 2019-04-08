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

var staticGifSuffix = "-static.png";
var gifSuffix = ".gif";

$(document).ready(function() {

    //var colors = ['coral', 'cornflowerblue', 'crimson','deepskyblue','gold','darkseagreen'];
    //var colors =['#FFF761','#4CC8C3','#B254D0','#FFA761','lightgreen','#e98ebc','#ccf88a','#63cff3'];
    //faded color palette
    var colors = ['#FFF76133','#4CC8C333','#B254D033','#FFA76133'];
    var color_index =Math.floor(Math.random() * colors.length) ;

    var x = document.getElementsByClassName('cardjig');
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.background = colors[color_index];
        color_index++;
        if (color_index == colors.length) {
          color_index = 0;
        }
    }  

    $('.cardjig').hover(function(){
        $(this).transition({
            animation  : 'pulse'
            //duration   : '1s'
            });
    }, function(){});
    
    $(".imgAnimate").each(function () {
  
        $(this).hover(
          function()
          {
              var originalSrc = $(this).attr("src");
              $(this).attr("src", originalSrc.replace(staticGifSuffix, gifSuffix));
          },
          function()
          {
              var originalSrc = $(this).attr("src");
              $(this).attr("src", originalSrc.replace(gifSuffix, staticGifSuffix));  
          }
        );
  
    });
  

});

