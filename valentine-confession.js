const slideEl = document.getElementById('slides');
const bgm = document.getElementById('bgm');
let currentSlide = 0;

function updateSlide() {
  slideEl.style.transform = `translateX(-${currentSlide * 100}vw)`;

  // Musik mati di slide video (slide ke-2)
  if (currentSlide === 1) {
    bgm.pause();
  } else {
    bgm.play().catch(() => {});
  }

  // Load bunga di slide 3
  if (currentSlide === 2) {
    $('#flowersContent').load('https://akariiff.github.io/flowers-for-her/', function (resp, status) {
      if (status !== 'success') {
        $('#flowersContent').html('<p>Gagal memuat bunga. Coba buka ulang halaman.</p>');
      }
    });
  }
}

function nextSlide() {
  if (currentSlide < 2) {
    currentSlide++;
    updateSlide();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

$(document).ready(function () {
  $('#messageState').change(function () {
    const msg = $('.message'), heart = $('.heart');

    if (this.checked) {
      bgm.play().catch(() => {}); // Play musik setelah interaksi
      msg.removeClass('closeNor').addClass('openNor');
      heart.removeClass('closeHer').addClass('openHer');
    } else {
      msg.removeClass('openNor').addClass('closeNor');
      heart.removeClass('openHer').addClass('closeHer');
    }
  });
});
