$( document ).ready(function() {

    // Load Music
    var bgMusic = new buzz.sound("sound/kmart2_audition", {
        formats: [ "mp3" ],
        preload: true,
        autoplay: true,
        loop: true,
        volume: 40
    });

    // Mute/Play Button
    $( ".volume-button" ).click(function() {
        $( ".volume-button span" ).toggle();
        bgMusic.togglePlay();
    });

    // Dragglable elements
    $(function() {
      $( ".drag" ).draggable();
    });
});
