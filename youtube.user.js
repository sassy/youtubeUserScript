// ==UserScript==
// @match http://www.youtube.com/watch*
// ==/UserScript==
(function(){
  var player = document.getElementById('movie_player');
  setInterval(
    function() {
      if (player.getPlayerState() == 0) {
        player.playVideo();
      }
    }
  ,1000);
})();
