var staticGifSuffix = "-static.png";
var gifSuffix = ".gif";

let backgroundColor;
let textColor;
let cardBackgroundColor;
let hyperlinkColor;
let hyperlinkColorHover;
let dateColor;
let gridContainerBackground;
let heartColor;
const setTheme = function(theme) {
  if (theme == 'dark') {
    $("#nm_slider").removeClass("nm_day").addClass("nm_night");
    backgroundColor = '#261d45';
    textColor = '#FFF';
    cardBackgroundColor = '#464646';
    hyperlinkColor = '#00ffc8';
    hyperlinkColorHover = '#aa2fd3';
    dateColor = '#888787';
    gridContainerBackground = '#05608c33';
    heartColor = '#1ccca3';
  } else {
    $("#nm_slider").removeClass("nm_night").addClass("nm_day");
    backgroundColor = '#f8f8ff';
    textColor = '#000';
    cardBackgroundColor = backgroundColor
    hyperlinkColor = '#00b5adc4';
    hyperlinkColorHover = '#9627ba';
    dateColor = 'rgba(0,0,0,.4)';
    gridContainerBackground = '#61ffd933';
    heartColor = '#cc1c1c';
  }
  $('html').css('background-color', backgroundColor);
  $('#wrapper').css('background-color', backgroundColor);
  $('#wrapper').css('color', textColor);
  $('.post-item-date').css('color', textColor);
  $('.posts-item-note').css('color', textColor);
  $('.header').css('color', textColor);
  $('.cardBg').css('background-color', cardBackgroundColor);
  $('.description').css('color', textColor);
  $('a').css('color', hyperlinkColor);
  $('.date').css('color', dateColor);
  $('.resume').css('background-color', gridContainerBackground);
  $('.heartColor').css('font-weight', '1000');
  $('.heartColor').css('color', heartColor);
};

const currentTheme = localStorage.getItem("theme");

// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

  const checkBox = document.getElementById('night_mode');
  if (currentTheme == "dark") {
    checkBox.checked = true;
    setTheme("dark");
  }
  else {
    checkBox.checked = false;
    setTheme("light");
  }
});

const changeTheme = () => {
    let theme;
    const e = document.getElementById('night_mode');
    if (e.checked === true) {
        theme = "dark"; 
    } else {
        theme = "light"
    }
    setTheme(theme);
    localStorage.setItem("theme", theme);
};

$(document).ready(function() {

  //faded color palette
  var colors = ['#FFF76133', '#4CC8C333', '#B254D033', '#FFA76133'];
  var color_index = Math.floor(Math.random() * colors.length);

  var x = document.getElementsByClassName('cardjig');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.background = colors[color_index];
    color_index++;
    if (color_index == colors.length) {
      color_index = 0;
    }
  }

  $('.cardjig').hover(function() {
    $(this).transition({
      animation: 'pulse'
    });
  }, function() { });

  $(".imgAnimate").each(function() {
    $(this).hover(
      function() {
        var originalSrc = $(this)[0].getElementsByClassName("image")[0].children[0].attributes.src.value;
        $(this)[0].getElementsByClassName("image")[0].children[0].attributes.src.value = originalSrc.replace(staticGifSuffix, gifSuffix);
      },
      function() {
        var originalSrc = $(this)[0].getElementsByClassName("image")[0].children[0].attributes.src.value;
        $(this)[0].getElementsByClassName("image")[0].children[0].attributes.src.value = originalSrc.replace(gifSuffix, staticGifSuffix);
      }
    );

  });

  try {
    consoleText(['Engineer', 'Maker', 'C0d3r'], 'text', ['#FFA761', '#4CC8C3', '#B254D0'], ['<emoji>&#x1F468&#x200D&#x1F527</emoji>', '<emoji>&#x1F468&#x200D&#x1F3A8</emoji>', '<emoji>&#x1F468&#x200D&#x1F4BB</emoji>']);

    function consoleText(words, id, colors, emojis) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id);
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
            target.innerHTML = emojis[0] + ' ' + target.innerHTML;
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
            target.innerHTML = emojis[0] + ' ' + words[0].substring(0, letterCount - 1);
          } else {
            target.innerHTML = emojis[0] + ' ' + words[0].substring(0, letterCount);
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
  } catch {
    console.log('Not in main page');
  }

});
