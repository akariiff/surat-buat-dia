$(document).ready(function () {
  var checkbox = $('#messageState');
  var message = $('.message');
  var heart = $('.heart');

  checkbox.change(function () {
    if (this.checked) {
      message.removeClass('closeNor').addClass('openNor');
      heart.removeClass('closeHer').addClass('openHer');
    } else {
      message.removeClass('openNor').addClass('closeNor');
      heart.removeClass('openHer').addClass('closeHer');
    }
  });
});
