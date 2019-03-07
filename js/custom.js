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

