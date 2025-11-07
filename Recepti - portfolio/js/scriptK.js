// Sve kartice recepta
const cards = document.querySelectorAll('.card');

// Lista kartica (glavna sekcija sa receptima)
const recipeList = document.getElementById('recipe-list');

// Sekcija koja prikazuje detaljan recept
const recipeDetail = document.getElementById('recipe-detail');

// Dugme za povratak na listu recepata
const backBtn = document.getElementById('back-btn');

// Elementi u detaljnom prikazu recepta
const detailTitle = document.getElementById('detail-title'); // Naslov recepta
const detailImg = document.getElementById('detail-img');     // Slika recepta
const detailText = document.getElementById('detail-text');   // Tekst recepta

// Polje za pretragu
const searchInput = document.getElementById('searchInput');

// Checkboxovi za filtriranje kategorija
const checkboxes = document.querySelectorAll('.category');

// Sekcija filtera (pretraga + checkboxovi)
const filtersSection = document.getElementById('filters');

// Dugmad za selektovanje ili deselect svih checkboxova
const selectAllBtn = document.getElementById('select-all');
const deselectAllBtn = document.getElementById('deselect-all');

// Hamburger ikona (FA-BARS)
const faBars = document.getElementById('fa-bars');

// Lista linkova u navigaciji
const navUl = document.querySelector('nav ul');

// Hamburger meni - fa-bars
faBars.addEventListener('click', () => {
  // Ako je meni otvoren, sakrij ga; ako je zatvoren, prikaži
  navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
  // Postavlja linkove u kolonu i desno poravnanje
  navUl.style.flexDirection = 'column';
  navUl.style.alignItems = 'flex-end';
});

// Objekat koji čuva detalje za svaki recept: naslov, sliku i tekst pripreme
const recepti = {
  "lazanja": {
    title: "Lazanja",
    img: "../slike/lazanje.webp",
    text: "Skuvajte bešamel sos, propržite povrće, složite red lazanja, povrće i sos u vatrostalnu posudu. Ponovite slojeve i pecite 35-40 minuta na 180°C dok ne dobije zlatnu boju."
  },
  "supa": {
    title: "Supa od povrća",
    img: "../slike/supa od povrca.jpg",
    text: "U šerpu stavite iseckano povrće, nalijte vodu ili bujon i kuvajte 20-25 minuta. Začinite po ukusu, po želji dodajte testeninu ili pirinač."
  },
  "salata": {
    title: "Posna salata",
    img: "../slike/grcka salata.jpg",
    text: "Iseckajte paradajz, krastavce, papriku i crni luk. Dodajte masline, prelijte maslinovim uljem i posolite po ukusu."
  },
  "bruskete": {
    title: "Bruskete",
    img: "../slike/brusketi.jpeg",
    text: "Prepecite kriške hleba, premažite belim lukom i maslinovim uljem. Na vrh stavite iseckane paradajze i začine po želji."
  },
  "humus": {
    title: "Humus",
    img: "../slike/humus.webp",
    text: "Skuvajte i pasirajte leblebije. Dodajte tahini, maslinovo ulje, limunov sok i so. Dobro izmešajte dok ne postane glatko."
  },
  "punjene-paprike": {
    title: "Punjene paprike",
    img: "../slike/posna-punjena-paprika.jpg",
    text: "Ispraznite paprike, pripremite fil od pirinča i povrća. Napunite paprike i pecite u rerni sa paradajz sosom 40-45 minuta."
  },
  "pecurke-stroganoff": {
    title: "Pečurke Stroganoff",
    img: "../slike/stroganof.webp",
    text: "Pržite pečurke i luk, dodajte pavlaku i začine. Kuvajte 5-10 minuta dok sos ne postane gust, poslužite uz testeninu ili pirinač."
  },
  "pasulj": {
    title: "Posni pasulj",
    img: "../slike/pasulj.jpg",
    text: "Skuvajte pasulj do mekoće, propržite luk i šargarepu, dodajte paradajz i začine, pa sve sjedinite i kuvajte još 15 minuta."
  },
  "krem-od-bundeve": {
    title: "Krem supa od bundeve",
    img: "../slike/posna-corba-od-bundeve.webp",
    text: "Skuvajte bundevu i šargarepu u vodi ili bujonu. Izblendajte dok ne postane glatko i dodajte začine po ukusu."
  },
  "minestrone": {
    title: "Minestrone",
    img: "../slike/minestrone.jpg",
    text: "U šerpu dodajte razno povrće, pasulj i testeninu. Kuvajte dok povrće ne omekša, začinite po ukusu sa začinskim biljem."
  },
  "pasta-salata": {
    title: "Pasta salata",
    img: "../slike/pasta salata.jpg",
    text: "Skuvajte testeninu, ohladite i pomešajte sa seckanim povrćem, maslinama i prelivom od maslinovog ulja i limunovog soka."
  },
  "avokado-salata": {
    title: "Avokado salata",
    img: "../slike/avokado salata.webp",
    text: "Iseckajte avokado, paradajz i krastavac, dodajte limunov sok i maslinovo ulje. Posolite i promešajte."
  },
  "focaccia": {
    title: "Focaccia",
    img: "../slike/fokaco.jpg",
    text: "Pripremite testo od brašna, vode i kvasca, rastanjite ga, premažite maslinovim uljem i pospite ruzmarinom. Pecite 20-25 minuta na 200°C."
  },
  "lepinja": {
    title: "Lepinja",
    img: "../slike/lepinja.webp",
    text: "Umesite testo, ostavite da naraste, oblikujte lepinje i pecite na 180°C oko 15-20 minuta dok ne dobiju zlatnu boju."
  },
  "pecivo-susam": {
    title: "Pecivo sa susamom",
    img: "../slike/pecivo-susam.jpeg",
    text: "Pripremite testo, oblikujte peciva, premažite ih vodom i pospite susamom. Pecite 15-18 minuta na 200°C."
  },
  "cokoladni-kolac": {
    title: "Čokoladni kolač",
    img: "../slike/posni-cokoladni-kolac-na-vodi.webp",
    text: "Pomešajte brašno, kakao, šećer i vodu. Pecite 25 minuta na 180°C. Ohladite i poslužite."
  },
  "torta-voce": {
    title: "Voćna torta",
    img: "../slike/torta-voce.webp",
    text: "Pripremite biskvit, premažite kremom po izboru i dekorisite svežim voćem. Ostavite u frižideru pre serviranja."
  },
  "keks": {
    title: "Posni keks",
    img: "../slike/keks.webp",
    text: "Pomešajte brašno, šećer, ulje i biljne dodatke. Oblikujte kekse i pecite 12-15 minuta na 180°C."
  }
};


// Dodaje klik događaj na svaku karticu
cards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.recept; // Uzima naziv recepta iz data atributa kartice
    if(recepti[key]){
      // Postavljanje podataka u detaljni prikaz
      detailTitle.textContent = recepti[key].title; // Naslov
      detailImg.src = recepti[key].img;            // Slika
      detailImg.alt = recepti[key].title;          // Alt tekst
      detailText.textContent = recepti[key].text;  // Tekst pripreme

      // Sakrivanje glavne liste i filtera
      recipeList.style.display = 'none';
      filtersSection.style.display = 'none';

      // Prikaz detaljnog recepta
      recipeDetail.style.display = 'block';
    }
  });
});

// DUGME BACK - vraća na listu recepata

backBtn.addEventListener('click', () => {
  recipeDetail.style.display = 'none'; // Sakriva detaljan prikaz
  recipeList.style.display = 'grid';   // Prikazuje ponovo listu kartica
  filtersSection.style.display = 'block'; // Prikazuje filter sekciju
});


// FILTRIRANJE KARTICA

function filterCards(){
  // Niz selektovanih kategorija
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)  // Uzima samo čekirane
    .map(cb => cb.value);      // Uzima njihove vrednosti

  // Tekst iz polja za pretragu (mala slova radi lakše upoređivanje)
  const search = searchInput.value.toLowerCase();

  // Prolazak kroz sve kartice
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();  // Naslov kartice
    const sastojci = card.dataset.sastojci.toLowerCase();              // Sastojci kartice
    const category = card.dataset.category;                             // Kategorija kartice

    // Provera da li kartica spada u selektovane kategorije
    const matchesCategory = selected.length === 0 || selected.includes(category);

    // Provera da li kartica odgovara pretrazi (naziv ili sastojci)
    const matchesSearch = title.includes(search) || sastojci.includes(search);

    // Prikaz ili skrivanje kartice
    card.style.display = (matchesCategory && matchesSearch) ? 'block' : 'none';
  });
}

// Aktivira filtriranje kada se promeni neki checkbox
checkboxes.forEach(cb => cb.addEventListener('change', filterCards));

// Aktivira filtriranje dok se kuca u polju za pretragu
searchInput.addEventListener('input', filterCards);

// DUGME SELECT ALL - označava sve kategorije
selectAllBtn.addEventListener('click', () => {
  checkboxes.forEach(cb => cb.checked = true);
  filterCards(); // Primena filtera nakon selekcije
});

// DUGME DESELECT ALL - skida sve selekcije
deselectAllBtn.addEventListener('click', () => {
  checkboxes.forEach(cb => cb.checked = false);
  filterCards(); // Primena filtera nakon deselect
});