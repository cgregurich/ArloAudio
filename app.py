from flask import Flask, render_template, request, jsonify
# from playsound import playsound

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/client")
def client():
    return render_template("client.html")

@app.route("/server")
def server():
    return render_template("server.html")

@app.route("/send_data", methods=["POST"])
def send_data():
    data = request.get_json()
    if "message" not in data.keys():
        return jsonify({"response": "Error! Missing message key"})
    message = data["message"]
    return jsonify({"response": f"Received message: {message}"})

# @app.route("/playSound", methods=["POST"])
# def playSound():
#     try:
#         playsound("C:/Users/colin/code/ArloAudio/audio/arloyoureokay.wav")
#         return jsonify({"response": "Successfully played sound"})
#     except:
#         return jsonify({"response": "Something went wrong"})
    

@app.route("/get_user")
def get_user():
    return jsonify({"data": "bootersket"})

if __name__ == "__main__":
    app.run(debug=True)