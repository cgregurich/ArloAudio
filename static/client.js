let socket = io();
socket.on("connect", function() {
    socket.emit("my event", {data: "I'm connected"});
});


function buttonClicked() {
    socket.emit("play audio");
}

function sendMessage() {
    let input = document.getElementById("message-input");
    let message = input.value;
    socket.send({message: message});
    console.log(`'${message}' sent!`);
}

document.getElementById("play-button").addEventListener("click", buttonClicked);
document.getElementById("send-button").addEventListener("click", sendMessage);