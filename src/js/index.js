window.onload = function() {
  console.log('index had been loaded!')

  var winH = window.innerHeight || document.body.clientHeight || document.body.offsetHeight,
    winW = window.innerWidth || document.body.clientWidth || document.body.offsetWidth;

  function g(id) {
    return document.getElementById(id);
  }
  var mainTitle, secTitle, video, videoH, videoW = null;
  mainTitle = g('mainTitle');
  secTitle = g('secTitle');
  video = g('video')
  videoH = video.videoHeight;
  videoW = video.videoWidth;

  function resetVideoCon() {
    console.log('jj')
    if (winH / videoH < winW / videoW) {
      video.style.width = winW + 'px';
    } else {
      video.style.height = winH + 'px';
    }
  }

  resetVideoCon();

  var timeId = -1;
  window.onresize = function() {
    timeId = setTimeout(function() {
      console.log(timeId)
      resetVideoCon();
    }, 500)
  }

  setTimeout(() => {
    mainTitle.style.marginTop = 0;
    mainTitle.style.opacity = 1;
    secTitle.style.marginTop = '20px';
    secTitle.style.opacity = 1;
  }, 500);
}