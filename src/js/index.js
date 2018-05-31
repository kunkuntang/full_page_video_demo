window.onload = function() {
  console.log('index had been loaded!')

  function g(id) {
    return document.getElementById(id);
  }
  var mainTitle, secTitle = null;
  mainTitle = g('mainTitle');
  secTitle = g('secTitle');

  setTimeout(() => {
    mainTitle.style.marginTop = 0;
    mainTitle.style.opacity = 1;
    secTitle.style.marginTop = '20px';
    secTitle.style.opacity = 1;
  }, 500);
}