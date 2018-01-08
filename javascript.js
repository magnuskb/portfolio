(function blink() {
    $('.blink_me').fadeOut(500).fadeIn(500, blink);
})();

$(document).ready(function() {
  $("#cf_onclick").click(function() {
  $("#cf2 img.top").toggleClass("transparent");
});
});
