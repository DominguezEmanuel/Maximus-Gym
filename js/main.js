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

  // Animar overlay
  $("#hero-overlay").animate({ opacity: 0.7 }, 1500);

  // Animaciones del texto
  $(".info h1").fadeIn(800, function () {
    $(".info p").slideDown(600, function () {
      $(".inicio-seccion a").fadeIn(600);
    });
  });

  //Animaciones cards
  $(".card").hover(
    function () {
      // Animación de la card
      $(this).stop().animate({ marginTop: "-10px" }, 200);
      $(this).css({
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        transition: "box-shadow 0.2s ease",
      });

      // Oscurecer la imagen al hacer hover
      $(this).find("img").css({
        filter: "brightness(70%)",
        transition: "filter 0.2s ease",
      });
    },
    function () {
      // Volver a estado normal
      $(this).stop().animate({ marginTop: "0px" }, 200);
      $(this).css({
        boxShadow: "none",
      });

      // Restaurar brillo original de la imagen
      $(this).find("img").css({
        filter: "brightness(100%)",
      });
    }
  );

  //contador animado
  contador();

  //Carrusel Automático
  $("#carouselExampleCaptions").carousel({
    interval: 3000, // Cambia de imagen cada 3 segundos
    ride: "carousel", // Activa el desplazamiento automático
  });

  // Mostrar comentario al pasar el cursor sobre la imagen
  $(".testimonial-wrapper").hover(
    function () {
      $(this).find(".testimonial-caption").fadeIn(300);
      $(this).find(".testimonial-img").css("transform", "scale(1.03)");
    },
    function () {
      $(this).find(".testimonial-caption").fadeOut(300);
      $(this).find(".testimonial-img").css("transform", "scale(1)");
    }
  );
});

function contador() {
  setInterval(intervalo, 15);
  let x = 0;
  const clases = $("*[data-valor]");
  function intervalo() {
    x++;
    for (let i = 0; i < clases.length; i++) {
      const resultados = parseInt($(clases[i]).attr("data-valor"), 10);
      if (x > resultados) {
        continue;
      } else {
      }
      $(clases[i]).text(`+${x}`);
    }
  }
}
