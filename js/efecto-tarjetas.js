$(document).ready(function () {
  $(".progress-bar").each(function () {
    var $this = $(this);
    var value = $this.attr("aria-valuenow");
    $this.animate(
      {
        width: value + "%",
      },
      1000
    );
  });

  // Estrellas de rating interactivas
  $(".rating input").on("change", function () {
    var selected = $(this).val();
    $(this).parent().attr("data-selected", selected);
    console.log("Puntaje seleccionado: " + selected);
  });
});
