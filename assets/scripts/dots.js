var container = $("#dots-bg"),
  btns = 1,
  windowX = $(window).width(),
  windowY = $(window).height(),
  nbDot = ($(window).width() * $(window).height()) / 8000;

function dotBgGetRandomStyle() {
  var randWidth = Math.round(Math.random(1) * 30 + 10),
    randZ = Math.round(Math.random(1) * 200);
  (randLeft = Math.round(Math.random(1) * 100)),
    (randTop = Math.round(Math.random(1) * 100)),
    (randOpacity = Math.ceil((Math.random(1) / 1.5 + 0.25) * 100));
  return (
    "font-size: " +
    randWidth +
    "px; opacity: 0." +
    randOpacity +
    "; left: " +
    randLeft +
    "%; top: " +
    randTop +
    "%' x='" +
    randLeft +
    "' y='" +
    randTop +
    "' z='" +
    randZ
  );
}

function createDotBg() {
  container.html("");
  for (let index = 0; index < nbDot; index++) {
    addNewDot();
  }
  dotBgStartDynamicMove();
}

function addNewDotes() {
  for (let index = 0; index < 3; index++) {
    addNewDot();
  }
  dotBgStartDynamicMove();
}

function addNewDot() {
  container.append(
    "<p class='dot-dot' style='" + dotBgGetRandomStyle() + "'>.</p>"
  );
}

function dotBgStartDynamicMove() {
  var timer = 0;
  $(".dot-dot").each(function() {
    var target = $(this);
    setTimeout(function() {
      target.fadeIn();
    }, timer);
    timer = timer + 10;
  });
}

function dotBgStartEventListeners() {
  createDotBg();
  container.mousedown(function() {
    addNewDotes();
  });

  $(document).mousemove(function(event) {
    X = ((event.pageX - windowX / 2) * 100) / windowX;
    Y = ((event.pageY - windowY / 2) * 100) / windowY;
    $(".dot-dot").each(function() {
      var newLeft =
        parseInt($(this).attr("x")) + (parseInt($(this).attr("z")) / 4000) * X;
      var newTop =
        parseInt($(this).attr("y")) + (parseInt($(this).attr("z")) / 4000) * Y;
      $(this).css("left", newLeft + "%");
      $(this).css("top", newTop + "%");
    });
  });
}

dotBgStartEventListeners();
