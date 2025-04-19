$(document).ready(function () {
  function validarCampo(input, tipo = "text") {
    let valor = input.val().trim();
    let valido = false;

    if (tipo === "text") valido = valor.length >= 2;
    if (tipo === "email") valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    if (tipo === "select") valido = valor !== "";
    if (tipo === "textarea") valido = valor.length >= 5;

    input.toggleClass("is-valid", valido);
    input.toggleClass("is-invalid", !valido);
    return valido;
  }

  $("#nombre, #apellido").on("input", function () {
    validarCampo($(this));
  });

  $("#email").on("input", function () {
    validarCampo($(this), "email");
  });

  $("#motivo").on("change", function () {
    validarCampo($(this), "select");
  });

  $("#mensaje").on("input", function () {
    validarCampo($(this), "textarea");
  });

  $("input[name='sexo']").on("change", function () {
    $("#sexoFeedback").hide();
  });

  $("#formularioContacto").on("submit", function (e) {
    e.preventDefault();

    const validNombre = validarCampo($("#nombre"));
    const validApellido = validarCampo($("#apellido"));
    const validEmail = validarCampo($("#email"), "email");
    const validMotivo = validarCampo($("#motivo"), "select");
    const validMensaje = validarCampo($("#mensaje"), "textarea");
    const validSexo = $("input[name='sexo']:checked").length > 0;

    if (
      validNombre &&
      validApellido &&
      validEmail &&
      validMotivo &&
      validMensaje &&
      validSexo
    ) {
      $("#spinner").removeClass("d-none").hide().fadeIn();

      setTimeout(function () {
        $("#spinner").fadeOut(function () {
          $(this).addClass("d-none");
        });

        $("#formularioContacto")[0].reset();
        $(".form-control").removeClass("is-valid is-invalid");
        $("#sexoFeedback").hide();

        // Mostrar modal de confirmación
        const modal = new bootstrap.Modal(
          document.getElementById("modalConfirmacion")
        );
        modal.show();
      }, 2000);
    }
  });
});
