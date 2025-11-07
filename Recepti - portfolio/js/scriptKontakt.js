/* FA-BARS meni */
const faBars = document.getElementById("fa-bars");
const navUl = document.querySelector("nav ul");

faBars.addEventListener("click", () => {
  /* Dodaje ili uklanja klasu 'show' kada se klikne na hamburger */
  navUl.classList.toggle("show");
});

/* Selektovanje polja registracije */
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

/* Selektovanje sekcija stranice */
const prijavaSekcija = document.getElementById("prijavaSekcija");
const unosReceptaSekcija = document.getElementById("unosReceptaSekcija");

/* Funkcija za validaciju imena u realnom vremenu */
function checkName() {
  const name = nameInput.value.trim();
  const msg = document.getElementById("nameMsg");
  const regex = /^[A-Za-zČĆŽŠĐčćžšđ]{3,}$/;

  if(name === "") {
    msg.textContent = "Ime je obavezno";
    msg.style.color = "red";
  } else if(!regex.test(name)) {
    msg.textContent = "Ime mora imati najmanje 3 slova";
    msg.style.color = "red";
  } else {
    msg.textContent = "Ime je validno";
    msg.style.color = "green";
  }
}

/* Funkcija za validaciju prezimena u realnom vremenu */
function checkSurname() {
  const surname = surnameInput.value.trim();
  const msg = document.getElementById("surnameMsg");
  const regex = /^[A-Za-zČĆŽŠĐčćžšđ]{3,}$/;

  if(surname === "") {
    msg.textContent = "Prezime je obavezno";
    msg.style.color = "red";
  } else if(!regex.test(surname)) {
    msg.textContent = "Prezime mora imati najmanje 3 slova";
    msg.style.color = "red";
  } else {
    msg.textContent = "Prezime je validno";
    msg.style.color = "green";
  }
}

/* Funkcija za validaciju korisničkog imena */
function checkUsername() {
  const username = usernameInput.value.trim();
  const msg = document.getElementById("usernameMsg");
  const regex = /^[A-Za-z0-9]{5,}$/;

  if(username === "") {
    msg.textContent = "Korisničko ime je obavezno";
    msg.style.color = "red";
  } else if(!regex.test(username)) {
    msg.textContent = "Mora imati minimum 5 karaktera";
    msg.style.color = "red";
  } else {
    msg.textContent = "Korisničko ime je validno";
    msg.style.color = "green";
  }
}

/* Funkcija za validaciju lozinke */
function checkPassword() {
  const password = passwordInput.value;
  const msg = document.getElementById("passwordMsg");
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  if(password === "") {
    msg.textContent = "Lozinka je obavezna";
    msg.style.color = "red";
  } else if(!regex.test(password)) {
    msg.textContent = "Mora imati bar 6 karaktera, jedno veliko i malo slovo i broj";
    msg.style.color = "red";
  } else {
    msg.textContent = "Lozinka je validna";
    msg.style.color = "green";
  }

  /* Ažurira status potvrde lozinke u realnom vremenu */
  checkConfirmPassword();
}

/* Funkcija za validaciju potvrde lozinke */
function checkConfirmPassword() {
  const confirm = confirmPasswordInput.value;
  const password = passwordInput.value;
  const msg = document.getElementById("confirmPasswordMsg");

  if(confirm === "") {
    msg.textContent = "Potvrdite lozinku";
    msg.style.color = "red";
  } else if(confirm !== password) {
    msg.textContent = "Lozinke se ne poklapaju";
    msg.style.color = "red";
  } else {
    msg.textContent = "Lozinke se poklapaju";
    msg.style.color = "green";
  }
}

/* Funkcija za submit registracije */
function validacijaPrijave() {
  /* Pokreće sve real-time validacije pre submit-a */
  checkName();
  checkSurname();
  checkUsername();
  checkPassword();
  checkConfirmPassword();

  /* Provera da li su svi podaci validni */
  const nameValid = document.getElementById("nameMsg").style.color === "green";
  const surnameValid = document.getElementById("surnameMsg").style.color === "green";
  const usernameValid = document.getElementById("usernameMsg").style.color === "green";
  const passwordValid = document.getElementById("passwordMsg").style.color === "green";
  const confirmValid = document.getElementById("confirmPasswordMsg").style.color === "green";

  if(nameValid && surnameValid && usernameValid && passwordValid && confirmValid) {
    alert("Uspešno ste se registrovali! Možete uneti recept.");
    /* Sakrij sekciju registracije i prikaži sekciju za unos recepta */
    prijavaSekcija.style.display = "none";
    unosReceptaSekcija.style.display = "block";
  } else {
    alert("Molimo popunite sva polja ispravno.");
  }

  /* Sprečava reload stranice */
  return false;
}

/* Sprečavanje slanja forme recepta dok polja nisu popunjena */
const receptForm = document.getElementById("receptForm");
receptForm.addEventListener("submit", function(e){
  const naziv = document.getElementById("naziv").value.trim();
  const kategorija = document.getElementById("kategorija").value;
  const sastojci = document.getElementById("sastojci").value.trim();
  const postupak = document.getElementById("postupak").value.trim();
  const vreme = document.getElementById("vreme").value.trim();
  const datum = document.getElementById("datum").value;

  if(!naziv || !kategorija || !sastojci || !postupak || !vreme || !datum){
    alert("Molimo popunite sva polja recepta.");
    e.preventDefault();
  } else {
    alert("Recept je uspešno unet!");
    e.preventDefault();
    receptForm.reset();
  }
});
