//  NAVBAR 
const faBars = document.getElementById('fa-bars');
const navMenu = document.querySelector('nav ul');

faBars.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show'));
});

//  KALENDAR 
const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Dani posta
let holidays= ["2025-08-27", "2025-09-01", "2025-09-15"];

// Praznici koji se poste
let  fastingDays = [
  // JUN
  "2025-06-12", // Sveti Duh
  "2025-06-28", // Petrovdanski post
  // JUL
  "2025-07-12", // Sveti Ilija
  "2025-07-20", // Preobraženje
  "2025-07-28", // Sveti Pantelija
  // AVGUST - Gospojinski post (14–27)
  "2025-08-14",
  "2025-08-15", // Velika Gospojina
  "2025-08-16",
  "2025-08-17",
  "2025-08-18",
  "2025-08-19",
  "2025-08-20",
  "2025-08-21",
  "2025-08-22",
  "2025-08-23",
  "2025-08-24",
  "2025-08-25",
  "2025-08-26",
  "2025-08-27",
  "2025-08-28", // Saborski dan
  // SEPTEMBAR
  "2025-09-14", // Krstovdan
  "2025-09-27", // Rođenje Presvete Bogorodice
  // OKTOBAR
  "2025-10-14", // Pokrov Presvete Bogorodice
  "2025-10-26"  // Sveti Dimitrije
];


function renderCalendar(month, year) {
  // ocisti prethodni sadrzaj kalendara
  calendarGrid.innerHTML = "";

  // izracunaj prvi dan u mesecu (0 je nedelja, 1 je ponedeljak itd.)
  const firstDay = new Date(year, month, 1).getDay();

  // izracunaj koliko ima dana u tom mesecu
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // ispisi naziv meseca i godine u naslovu
  monthYear.textContent = new Date(year, month).toLocaleString('sr-RS', { month: 'long', year: 'numeric' });

  // dodaj prazne divove pre prvog dana da bi se dani poravnali u kalendaru
  let emptyDivs = firstDay === 0 ? 6 : firstDay - 1;
  for (let i = 0; i < emptyDivs; i++) {
    calendarGrid.appendChild(document.createElement("div"));
  }

  // prodji kroz sve dane u mesecu
  for (let day = 1; day <= daysInMonth; day++) {
    // napravi novi div za svaki dan
    const dateDiv = document.createElement("div");
    dateDiv.textContent = day;

    // sacuvaj datum u formatu yyyy-mm-dd
    const fullDate = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

    // obelezi ako je dan post
    if (fastingDays.includes(fullDate)) dateDiv.classList.add("post");

    // obelezi ako je praznik
    if (holidays.includes(fullDate)) dateDiv.classList.add("holiday");

    // proveri da li je vikend i obelezi
    const dayOfWeek = new Date(year, month, day).getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) dateDiv.classList.add("weekend");

    // klikom na dan dodaje se ili uklanja oznaka posta
    dateDiv.addEventListener("click", () => {
      if (dateDiv.classList.contains("post")) {
        // ako je vec post ukloni ga iz niza i skini klasu
        dateDiv.classList.remove("post");
        fastingDays = fastingDays.filter(d => d !== fullDate);
      } else {
        // ako nije post dodaj ga u niz i dodaj klasu
        dateDiv.classList.add("post");
        fastingDays.push(fullDate);
      }
    });

    // dodaj dan u kalendar
    calendarGrid.appendChild(dateDiv);
  }
}

// dugme za prethodni mesec
prevMonthBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) { 
    currentMonth = 11; 
    currentYear--; 
  }
  renderCalendar(currentMonth, currentYear);
});

// dugme za sledeci mesec
nextMonthBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) { 
    currentMonth = 0; 
    currentYear++; 
  }
  renderCalendar(currentMonth, currentYear);
});

// pocetno iscrtavanje kalendara
renderCalendar(currentMonth, currentYear);
