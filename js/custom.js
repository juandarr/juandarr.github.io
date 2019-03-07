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
}
/*
object.addEventListener("mouseover", jiggle);
object.addEventListener("mouseover", tada);

function jiggle() {
    $('.cardjig')
  .transition('jiggle');
}

function tada() {
    $('.p-icon')
  .transition('tada');
}
*/
