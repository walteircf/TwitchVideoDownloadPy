document.getElementById("download-button").addEventListener("click", () => {
  const videoUrl = document.getElementById("video-url").value;

  if (videoUrl) {
    fetch("http://127.0.0.1:5000/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: videoUrl })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Download iniciado com sucesso!");
      } else {
        alert("Falha ao iniciar o download.");
      }
    })
    .catch(error => console.error("Erro:", error));
  } else {
    alert("Insira uma URL válida do vídeo da Twitch.");
  }
});
