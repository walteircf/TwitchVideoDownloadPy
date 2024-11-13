from flask import Flask, request, jsonify
import subprocess


app = Flask(__name__)


@app.route("/download", methods=["POST"])
def download():
    data = request.json
    url = data.get("url")

    if url:
        output_file = "twitch_video.mp4"
        command = ["streamlink", url, "best", "-o", output_file]

        try:
            subprocess.run(command, check=True)
            return jsonify({"success": True, "message": "Download iniciado!"})
        except subprocess.CalledProcessError:
            return jsonify({"success": False, "message": "Erro ao iniciar o download."})
    else:
        return jsonify({"success": False, "message": "URL inválido"})

if __name__ == "__main__":
    app.run(port=5000)