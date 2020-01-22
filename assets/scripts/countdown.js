var month = document.querySelector(".month").innerText;
var day1 = document.querySelector(".day1").innerText;
var year = document.querySelector(".year").innerText;
var time = document.querySelector(".event-time").innerText;
var dd = month + " " + day1 + " " + year + " " + time;
var deadline = new Date(dd).getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((t % (1000 * 60)) / 1000);

  setCounterValue(days, hrs, mins, secs);

  if (t < 0) {
    clearInterval(x);
    setCounterValue(0, 0, 0, 0);
  }
}, 1000);

function setCounterValue(days, hrs, mins, secs) {
  document.querySelector(".counter-time.days").innerText = days;
  document.querySelector(".counter-time.hrs").innerText = hrs;
  document.querySelector(".counter-time.mins").innerText = mins;
  document.querySelector(".counter-time.secs").innerText = secs;
}
