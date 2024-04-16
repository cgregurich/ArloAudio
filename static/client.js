let socket = io();
socket.on("connect", function() {
    socket.emit("my event", {data: "I'm connected"});
});


function buttonClicked() {
    socket.emit("play audio");
}

document.getElementById("play-button").addEventListener("click", buttonClicked);