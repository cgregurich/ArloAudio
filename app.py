from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@socketio.on("play audio")
def rx_play_audio():
    print("Client: play audio")
    emit("play audio", broadcast=True)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/client")
def client():
    return render_template("client.html")

@app.route("/server")
def server():
    return render_template("server.html")


if __name__ == "__main__":
    socketio.run(app)