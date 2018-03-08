const videos = window.videoList;
const totalVideos = videos.length;
const shuffledVideos = shuffle(videos);

let counter = 0;

function handleVideos () {
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.src = shuffledVideos[counter];

  if (counter === videos.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

window.onload = handleVideos;
document
  .getElementById('videoPlayer')
  .addEventListener('ended', handleVideos, false);
