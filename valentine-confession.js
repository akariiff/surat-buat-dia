$(document).ready(function () {
  // semua kode lama kamu masuk sini

  var checkbox = $('#messageState');
  var message = $('.message');
  var heart = $('.heart');

  checkbox.change(function () {
    if (this.checked) {
      message.removeClass('closeNor');
      message.addClass('openNor');

      heart.removeClass('closeHer');
      heart.addClass('openHer');
    } else {
      message.removeClass('openNor');
      message.addClass('closeNor');

      heart.removeClass('openHer');
      heart.addClass('closeHer');
    }
  });
});
