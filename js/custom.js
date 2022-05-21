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

  let backgroundColor;
  let textColor;
  let cardBackgroundColor;

  const setTheme = function(theme) {

    if (theme == 'dark') {

      backgroundColor = '#121215';
      textColor = 'rgba(198, 198, 198, 0.87)';
      cardBackgroundColor = '#464646';
    } else {

      backgroundColor = '#f8f8ff';
      textColor = '#000';
      cardBackgroundColor = backgroundColor;
    }

    $('body').css('background-color', backgroundColor);
    $('body').css('color', textColor);
    $('.post-item-date').css('color', textColor);
    $('.posts-item-note').css('color', textColor);
    $('.header').css('color', textColor);
    $('.cardBg').css('background-color', cardBackgroundColor);
    $('.description').css('color', textColor);

  };

  const currentTheme = localStorage.getItem("theme");
 if (currentTheme == "dark") {
  setTheme("dark");
  $('#night_mode')[0].checked = true;
 }
  else {
  setTheme("light");
  $('#night_mode')[0].checked = false;
}

$('#night_mode').change(function() {
if ($(this).is(':checked')) {
  setTheme("dark");
  localStorage.setItem("theme", "dark");
}else {
  setTheme("light");
  localStorage.setItem("theme", "light");
 }
});
  
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
              var originalSrc = $(this)[0].getElementsByClassName("image")[0].children[0].attributes.src.value;
              $(this)[0].getElementsByClassName("image")[0].children[0].attributes.src.value = originalSrc.replace(staticGifSuffix, gifSuffix);
          },
          function()
          {
              var originalSrc = $(this)[0].getElementsByClassName("image")[0].children[0].attributes.src.value;
              $(this)[0].getElementsByClassName("image")[0].children[0].attributes.src.value = originalSrc.replace(gifSuffix, staticGifSuffix);  
          }
        );
  
    });
  
    // function([string1, string2],target id,[color1,color2])    
 consoleText(['Engineer', 'Maker', 'C0d3r'], 'text',['#FFA761','#4CC8C3','#B254D0'], ['<emoji>&#x1F468&#x200D&#x1F527</emoji>','<emoji>&#x1F468&#x200D&#x1F3A8</emoji>','<emoji>&#x1F468&#x200D&#x1F4BB</emoji>']);

 function consoleText(words, id, colors, emojis) {
   if (colors === undefined) colors = ['#fff'];
   var visible = true;
   var con = document.getElementById('console');
   var letterCount = 1;
   var x = 1;
   var waiting = false;
   var target = document.getElementById(id)
   target.setAttribute('style', 'font-size:22px;font-variant: all-petite-caps; font-weight:bold;color:' + colors[0])
   window.setInterval(function() {
 
     if (letterCount === 0 && waiting === false) {
       waiting = true;
       target.innerHTML = words[0].substring(0, letterCount)
       window.setTimeout(function() {
         var usedEmoji = emojis.shift();
         emojis.push(usedEmoji);

         var usedColor = colors.shift();
         colors.push(usedColor);

         var usedWord = words.shift();
         words.push(usedWord);
         x = 1;
         target.setAttribute('style', 'font-size:22px;font-variant: all-petite-caps; font-weight:bold;color:' + colors[0])
         target.innerHTML = emojis[0]+ ' ' + target.innerHTML;
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (letterCount === words[0].length + 2 && waiting === false) {
       waiting = true;
       window.setTimeout(function() {
         x = -1;
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (waiting === false) {
       if (letterCount == words[0].length + 1) {
        target.innerHTML = emojis[0]+ ' ' +words[0].substring(0, letterCount-1);
       }else {
        target.innerHTML = emojis[0]+ ' ' +words[0].substring(0, letterCount);
       }
       
       letterCount += x;
     }
   }, 120)
   window.setInterval(function() {
     if (visible === true) {
       con.className = 'console-underscore hidden'
       visible = false;
 
     } else {
       con.className = 'console-underscore'
 
       visible = true;
     }
   }, 400)
 }

});
