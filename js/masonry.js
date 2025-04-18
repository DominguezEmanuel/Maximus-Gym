$(window).on("load", function () {
  $(".grid").masonry({
    itemSelector: ".grid-item",
    percentPosition: true,
    gutter: 15,
  });
});
