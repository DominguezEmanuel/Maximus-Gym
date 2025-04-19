$(document).ready(function () {
  // Cuando se haga clic en un botón de filtro
  $(".filter-btn").click(function () {
    var filterValue = $(this).attr("data-filter"); // Obtiene el valor del filtro

    // Muestra todos los artículos si se selecciona "todos"
    if (filterValue === "all") {
      $(".article-card").show();
    } else {
      // Filtra los artículos según la categoría seleccionada
      $(".article-card").each(function () {
        var tags = $(this).attr("class").split(" "); // Obtiene las clases del artículo
        if (tags.indexOf("tag-" + filterValue) !== -1) {
          $(this).show(); // Muestra los artículos que coinciden
        } else {
          $(this).hide(); // Oculta los artículos que no coinciden
        }
      });
    }
  });

  //Avatares Articulos
  $(".article-card").hover(
    function () {
      if ($(this).find(".action-buttons").length === 0) {
        $(this).append(`
        <div class="action-buttons position-absolute top-0 end-0 p-2">
          <button class="btn btn-sm btn-dark me-1 reply-btn">💬</button>
          <button class="btn btn-sm btn-dark highlight-btn">⭐</button>
        </div>
      `);
      }
    },
    function () {
      $(this).find(".action-buttons").remove();
    }
  );

  // Acción de "responder"
  $(document).on("click", ".reply-btn", function (e) {
    e.stopPropagation();
    alert("Responder a este artículo 🗨️");
  });

  // Acción de "destacar"
  $(document).on("click", ".highlight-btn", function (e) {
    e.stopPropagation();
    $(this).closest(".article-card").toggleClass("highlighted");
  });

  //IntersectionObserver
  const cards = document.querySelectorAll(".article-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cards.forEach((card) => observer.observe(card));
});
