let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const bgm = document.getElementById('bgm');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  currentSlide = index;
  handleAudio(index);
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
}

function handleAudio(index) {
  if (index === 1) {
    bgm.pause();
  } else {
    bgm.play().catch(() => {});
  }
}

// Init
window.addEventListener('load', () => {
  showSlide(0);

  document.body.addEventListener('click', () => {
    bgm.play().catch(() => {});
  }, { once: true });
});
