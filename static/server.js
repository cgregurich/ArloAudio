let socket = io();
function playAudio() {
    let audio = new Audio("https://dl.sndup.net/dv85/arloyoureokay.wav");
    audio.play();
}


function displayMessage(data) {
    console.log(data);
    console.log("Message received!");
}

document.getElementById("play-button").addEventListener("click", playAudio);
let msgsDiv = document.getElementById("messages");

socket.on("play audio", playAudio);
socket.on("message", displayMessage);