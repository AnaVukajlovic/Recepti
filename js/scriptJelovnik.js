document.addEventListener("DOMContentLoaded", function() {
    /* FA-BARS meni */
    const faBars = document.getElementById("fa-bars");
    const navUl = document.querySelector("nav ul");

    faBars.addEventListener("click", function() {
  /* Dodaje ili uklanja klasu 'show' kada se klikne na hamburger */
      navUl.classList.toggle("show");
    });
  });