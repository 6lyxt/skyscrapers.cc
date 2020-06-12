var playing = false;
function playMusic() {
    var audio = new Audio('music/music.mp3');
    if (playing == false) {
        audio.play();
        audio.volume = 0.02;
        playing = true;
    } else {
        audio.pause();
    }

    audio.loop();

}