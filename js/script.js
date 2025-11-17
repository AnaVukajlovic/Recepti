// KARUSEL
const slike = [
  { src: "../Recepti/slike/slika1.jpg", link: "kategorije.html" },
  { src: "../Recepti/slike/slika2.jpg", link: "kalendar.html" },
  { src: "../Recepti/slike/slika3.png", link: "kontakt.html" }
];

let index = 0;
const images = document.querySelectorAll(".carousel-img");
const carouselSection = document.querySelector(".carousel-section");
const dotsContainer = document.createElement("div");
dotsContainer.classList.add("carousel-dots");
carouselSection.appendChild(dotsContainer);

// Tačkice
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

function showSlide(i) {
  index = i;
  images.forEach((img, j) => {
    img.classList.toggle("active", j === i);
  });
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  index = (index + 1) % slike.length;
  showSlide(index);
}

let interval = setInterval(nextSlide, 3000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

function otvoriStranicu() {
  window.open(slike[index].link, "_blank");
}

// HAMBURGER MENU
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("fa-bars");
  const navMenu = document.querySelector("nav ul");
  menuToggle.addEventListener("click", function() {
      navMenu.classList.toggle('show');
  });
});

// RECEPTI
const recipeCards = document.querySelectorAll('.recipe-card');
const receptContainer = document.querySelector('.recept-detail-container');
const backBtn = document.getElementById('backBtn');

recipeCards.forEach(card => {
  card.addEventListener('click', () => {
      const id = 'recept' + card.dataset.recept;
      document.querySelectorAll('.recept-detail').forEach(r => r.style.display = 'none');
      const recept = document.getElementById(id);
      if(recept) {
          recept.style.display = 'block';
          receptContainer.style.display = 'block';
          document.querySelector('.recipes').style.display = 'none';
          document.querySelector('.carousel-section').style.display = 'none';
      }
  });
});

backBtn.addEventListener('click', () => {
  receptContainer.style.display = 'none';
  document.querySelector('.recipes').style.display = 'block';
  document.querySelector('.carousel-section').style.display = 'flex';
});
