
function playClicked() {
    playAudio();
}

function playAudio() {
    let audio = new Audio("audio/arloyoureokay.wav");
    audio.play();
}

document.getElementById("play-button").addEventListener("click", playClicked);