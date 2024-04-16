let socket = io();
function playAudio() {
    let audio = new Audio("https://dl.sndup.net/dv85/arloyoureokay.wav");
    audio.play();
}


document.getElementById("play-button").addEventListener("click", playAudio);

socket.on("play audio", playAudio);