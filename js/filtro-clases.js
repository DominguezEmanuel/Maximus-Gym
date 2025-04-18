$(document).ready(function () {
  //Filtro de las clases
  $("#filtro-ejercicio").on("change", function () {
    const filtro = $(this).val();

    $(".col").each(function () {
      const badges = $(this)
        .find(".badge")
        .map(function () {
          return $(this).text().trim();
        })
        .get();

      if (filtro === "todos" || badges.includes(filtro)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  //Filtro de los horarios
  $("#filtro-clase").on("change", function () {
    let seleccion = $(this).val();
    let $celdas = $("#tabla-horarios td");

    // Quitar resaltado anterior
    $celdas.removeClass("resaltado");

    // Aplicar resaltado si no es "todas"
    if (seleccion !== "todas") {
      $celdas.filter("." + seleccion).addClass("resaltado");
    }
  });
});
