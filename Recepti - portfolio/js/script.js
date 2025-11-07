/* KARUSEL */
// Niz slika za karusel
const slike = [
  { src: "../slike/slika1.jpg", link: "kategorije.html" },
  { src: "../slike/slika2.jpg", link: "kalendar.html" },
  { src: "../slike/slika3.png", link: "kontakt.html" }
];

// Trenutni indeks prikazane slike
let index = 0;

// Selektujemo sliku u karuselu
const imgElement = document.getElementById("carousel-img");

// Kreiramo container za tačkice
const carouselSection = document.querySelector(".carousel-section");
const dotsContainer = document.createElement("div");
dotsContainer.classList.add("carousel-dots");
carouselSection.appendChild(dotsContainer);

// Kreiramo tačkice za svaku sliku
slike.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active"); // Prva tačkica aktivna
  dot.addEventListener("click", () => {
      showSlide(i); // Klikom na tačkicu prikazujemo tu sliku
      resetInterval(); // Restartujemo automatsko menjanje
  });
  dotsContainer.appendChild(dot);
});

// Funkcija za prikaz slike po indeksu
function showSlide(i) {
  index = i;
  imgElement.src = slike[i].src;
  imgElement.alt = "Slika " + (i + 1);
  updateDots();
}

// Funkcija koja ažurira aktivnu tačkicu
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((d, i) => {
      if (i === index) d.classList.add("active");
      else d.classList.remove("active");
  });
}

// Automatsko menjanje slika na 3 sekunde
let interval = setInterval(nextSlide, 3000);

function nextSlide() {
  index = (index + 1) % slike.length;
  showSlide(index);
}

// Restart intervala kada korisnik klikne na tačkicu
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

// Otvaranje linka slike u novom prozoru
function otvoriStranicu() {
  window.open(slike[index].link, "_blank");
}


//  HAMBURGER MENU FA-BARS 
document.addEventListener("DOMContentLoaded", function() {
  // Selektujemo fa-bars ikonu
  const menuToggle = document.getElementById("fa-bars");
  // Selektujemo navigacioni meni (ul)
  const navMenu = document.querySelector("nav ul");

  // Funkcija koja menja vidljivost menija
  menuToggle.addEventListener("click", function() {
      // Ako je meni sakriven, pokaži ga
      if (navMenu.style.display === "flex") {
          navMenu.style.display = "none";
      } else {
          navMenu.style.display = "flex";
      }
  });
});

const faBars = document.getElementById('fa-bars');
const navUl = document.querySelector('nav ul');

faBars.addEventListener('click', () => {
    navUl.classList.toggle('show');
});



// Recept

// Selektujemo sve kartice recepta
const recipeCards = document.querySelectorAll('.recipe-card');

// Selektujemo container za detalje
const receptContainer = document.querySelector('.recept-detail-container');

// Selektujemo dugme "Nazad"
const backBtn = document.getElementById('backBtn');

// Dodajemo klik event na svaku karticu
recipeCards.forEach(card => {
  card.addEventListener('click', () => {
      const id = 'recept' + card.dataset.recept;

      // Sakrij sve detalje recepta
      document.querySelectorAll('.recept-detail').forEach(r => r.style.display = 'none');

      // Pronađi i prikaži izabrani recept
      const recept = document.getElementById(id);
      if(recept) {
          recept.style.display = 'block';
          receptContainer.style.display = 'block';

          // Sakrij listu recepata i karusel
          document.querySelector('.recipes').style.display = 'none';
          document.querySelector('.carousel-section').style.display = 'none';
      }
  });
});

// Klik na dugme "Nazad"
backBtn.addEventListener('click', () => {
  receptContainer.style.display = 'none';
  document.querySelector('.recipes').style.display = 'block';
  document.querySelector('.carousel-section').style.display = 'flex';
});
