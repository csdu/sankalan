$(document).ready(function() {
  $(window).trigger("resize");
  $(window).trigger("resize");
  var dd = "March 9, 2020";
  var deadline = new Date(dd + " 00:00:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    var e = document.getElementsByClassName("countdown");

    jQuery(".countdown").html(
      "<div class='counter-section'><div class='counter-wrap'><div class='counter-container'><div class='counter-box'><p class='counter-time'>" +
        days +
        "</p><p class='counter-tag'>days</p></div>" +
        "<div class='counter-box'><p class='counter-time'>" +
        hours +
        "</p><p class='counter-tag'>hrs</p></div>" +
        "<div class='counter-box'><p class='counter-time'>" +
        minutes +
        "</p><p class='counter-tag'>mins</p></div>" +
        "<div class='counter-box'><p class='counter-time'>" +
        seconds +
        "</p><p class='counter-tag'>secs</p></div></div></div></div>"
    );

    $("#to").html(dd);
  }, 1000);
});
