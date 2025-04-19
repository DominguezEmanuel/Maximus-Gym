// Inicializar tooltips de Bootstrap
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
  new bootstrap.Tooltip(el);
});

// Toggle de precios mensual/anual
$("#toggle-precio").on("change", function () {
  const anual = $(this).is(":checked");
  $("#tabla-precios .precio").each(function () {
    const precio = anual ? $(this).data("anual") : $(this).data("mensual");
    const texto = anual
      ? `$${precio.toLocaleString()} /año`
      : `$${precio.toLocaleString()} /mes`;
    $(this).text(texto);
  });
});

// Resaltar fila y columna al hacer clic
$("#tabla-precios tbody tr").on("click", function () {
  // Limpiar anteriores
  $("#tabla-precios td, #tabla-precios th").removeClass("highlight");

  const rowIndex = $(this).index();
  const cells = $(this).children("td");

  // Resaltar fila
  cells.addClass("highlight");

  // Resaltar columnas
  cells.each(function (colIndex) {
    $("#tabla-precios tbody tr").each(function () {
      $(this).children().eq(colIndex).addClass("highlight");
    });
    $("#tabla-precios thead tr th").eq(colIndex).addClass("highlight");
  });
});
