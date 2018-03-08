const videos = window.videoList;
const totalVideos = videos.length - 1;
const shuffledVideos = shuffle(videos);

let counter = 0;

function handleVideos () {
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.src = shuffledVideos[counter];

  if (counter === totalVideos) {
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

if (window.innerWidth >= 640) {
  window.onload = handleVideos;

  document
    .getElementById('videoPlayer')
    .addEventListener('ended', handleVideos, false);
}
