var offset = 500;
var duration = 750;
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) $("#top-up").fadeIn(duration);
    else $("#top-up").fadeOut(duration);
  });
  $("#top-up").click(function () {
    $("body,html").animate({ scrollTop: 0 }, duration);
  });
});
