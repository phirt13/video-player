$(function() {

  var $video = $('#video');
  var $playButton = $('#play-pause');
  var $muteButton = $('#mute');
  var $seekBar = $('#seek-bar');
  var $volumeBar = $('#volume-bar');
  var $fullScreen = $('#full-screen');

  $playButton.click(function() {
    if(video.paused == true) {
      video.play();
    } else {
      video.pause();
    }
  });

  $muteButton.click(function() {
    if(video.muted == false) {
      video.muted = true;
    } else {
      video.muted = false;
    }
  });

  $fullScreen.click(function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  });

  $seekBar.change(function() {
    var time = video.duration * ($seekBar.val() / 100);
    video.currentTime = time;
  });

  $video.bind('timeupdate', function() {
    var value = (100 / video.duration) * video.currentTime;
    $seekBar.val(value);
  });

  $seekBar.mousedown(function() {
    video.pause();
  });

  $seekBar.mouseup(function() {
    video.play();
  });

  $volumeBar.change(function() {
    video.volume = $volumeBar.val();
  });

});







