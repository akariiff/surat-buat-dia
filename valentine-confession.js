let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const bgMusic = document.getElementById('bg-music');
const ytPlayer = document.getElementById('yt-video');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });

  currentSlide = index;
  handleMusicAndVideo(index);
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
}

function restartSlides() {
  showSlide(0);
}

function handleMusicAndVideo(index) {
  if (index === 0 || index === 2) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}

function onYouTubeIframeAPIReady() {
  window.player = new YT.Player('yt-video', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    bgMusic.pause();
  } else if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED) {
    if (currentSlide === 2 || currentSlide === 0) {
      bgMusic.play();
    }
  }
}

// Initial setup
window.onload = function () {
  showSlide(0);

  document.body.addEventListener('click', () => {
    // User gesture to allow audio play
    bgMusic.play().catch(() => {});
  }, { once: true });

  // Load YouTube Iframe API
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};
