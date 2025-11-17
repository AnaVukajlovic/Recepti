// ======================
// KARUSEL
// ======================

// Niz slika i linkova
const slike = [
  { src: "../slike/slika1.jpg", link: "../Recepti/html/kategorije.html" },
  { src: "../slike/slika2.jpg", link: "../Recepti/html/kalendar.html" },
  { src: "../slike/slika3.png", link: "../Recepti/html/kontakt.html" }
];

// Trenutni indeks
let index = 0;



// Kreiramo container za tačkice
const carouselSection = document.querySelector(".carousel-section");
const dotsContainer = document.createElement("div");
dotsContainer.classList.add("carousel-dots");
carouselSection.appendChild(dotsContainer);

// Kreiramo tačkice
slike.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    showSlide(i);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

// Selektujemo sve slike karusela
const images = document.querySelectorAll(".carousel-img");

function showSlide(i) {
  index = i;
  images.forEach((img, j) => {
    img.classList.toggle("active", j === i);
  });
  updateDots();
}


// Ažuriranje tačkica
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

// Sledeća slika (automatski)
function nextSlide() {
  index = (index + 1) % slike.length;
  showSlide(index);
}

// Automatsko menjanje svake 3 sekunde
let interval = setInterval(nextSlide, 3000);

// Restart intervala
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

// Klik na sliku otvara link
function otvoriStranicu() {
  window.open(slike[index].link, "_blank");
}

// Prikaz prve slike odmah
showSlide(0);

// ======================
// HAMBURGER MENU
// ======================
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("fa-bars");
  const navMenu = document.querySelector("nav ul");
  menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle('show');
  });
});

// ======================
// RECEPTI
// ======================
const recipeCards = document.querySelectorAll('.recipe-card');
const receptContainer = document.querySelector('.recept-detail-container');
const backBtn = document.getElementById('backBtn');

recipeCards.forEach(card => {
  card.addEventListener('click', () => {
      const id = 'recept' + card.dataset.recept;

      // Sakrij sve detalje
      document.querySelectorAll('.recept-detail').forEach(r => r.style.display = 'none');

      // Prikaz izabranog recepta
      const recept = document.getElementById(id);
      if(recept) {
          recept.style.display = 'block';
          receptContainer.style.display = 'block';
          document.querySelector('.recipes').style.display = 'none';
          document.querySelector('.carousel-section').style.display = 'none';
      }
  });
});

// Dugme "Nazad"
backBtn.addEventListener('click', () => {
  receptContainer.style.display = 'none';
  document.querySelector('.recipes').style.display = 'block';
  document.querySelector('.carousel-section').style.display = 'flex';
});
