// FROM https://codepen.io/thecel/pen/EVeGpB

$(".checkbox-dropdown").click(function () {
  $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function (e) {
  e.stopPropagation();
});

