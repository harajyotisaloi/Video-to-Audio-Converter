const videoFile = document.getElementById("video-file");
const convertBtn = document.getElementById("convert-btn");
const audioPlayer = document.getElementById("audio-player");

convertBtn.addEventListener("click", () => {
  if (videoFile.files.length === 0) {
    alert("Please select a video file");
    return;
  }

  const videoBlob = videoFile.files[0];
  const videoUrl = URL.createObjectURL(videoBlob);

  const audioUrl = videoUrl.replace("video", "audio");

  audioPlayer.src = audioUrl;
  audioPlayer.play();
});
