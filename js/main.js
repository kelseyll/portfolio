$( document ).ready(function() {

    // Load Music
    var bgMusic = new buzz.sound("sound/kmart2_audition", {
        formats: [ "mp3" ],
        preload: true,
        autoplay: true,
        loop: true,
        volume: 30
    });

    // Mute/Play Button
    $( ".volume-button" ).click(function() {
        $( "span" ).toggle();
        bgMusic.togglePlay();
    });

    // Dragglable elements
    $(function() {
      $( ".drag" ).draggable();
    });
});
