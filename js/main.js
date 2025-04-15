$(document).ready(function () {
  $(".nav-item.dropdown").hover(
    function () {
      // Al pasar el mouse, mostrar el menú desplegable
      $(this).find(".dropdown-menu").stop(true, true).slideDown(200);
    },
    function () {
      // Al quitar el mouse, ocultar el menú desplegable
      $(this).find(".dropdown-menu").stop(true, true).slideUp(200);
    }
  );
});
