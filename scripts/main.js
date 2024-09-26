const burgerBtn = document.querySelector(".burger-menu");
const phoneMenu = document.querySelector(".phone-menu");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector(".close");
const preloader = document.querySelector(".preloader");
const phoneMenuBtns = document.querySelectorAll(".phone-ul li");
const languageSwitchBtn = document.getElementById("language-switch");
let isEnglish = true;

window.onload = function () {
  preloader.style.visibility = "hidden";
  preloader.style.display = "none";
};

burgerBtn.addEventListener("click", () => {
  phoneMenu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  phoneMenu.classList.remove("active");
  overlay.classList.remove("active");
});

phoneMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    phoneMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});

document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.classList.toggle("active");

    if (button.textContent === "More Info") {
      button.textContent = "Less Info";
    } else {
      button.textContent = "More Info";
    }
  });
});


languageSwitchBtn.addEventListener('click', function() {
  isEnglish = !isEnglish;

  if (isEnglish) {
    // Hero Section
    document.querySelector('h1 > span:nth-child(1)').innerHTML = 'Scaffolding Solutions You Can Trust,';
    document.querySelector('h1 > span:nth-child(2)').innerHTML = 'from Ground to Sky.';
    // About Us Section
    document.querySelector('#about h2').innerText = 'About Us';
    document.querySelector('#about p').innerText = 'Based in Italy, we are a scaffolding company committed to providing high-quality, safe, and innovative scaffolding solutions for both commercial and industrial projects.';
    // Mission Section
    document.querySelector('.mission h3').innerText = 'Our Mission';
    document.querySelector('.mission p').innerText = 'To deliver reliable scaffolding solutions that meet the highest safety standards, enhancing construction processes with durability and precision.';
    // Vision Section
    document.querySelector('.vision h3').innerText = 'Our Vision';
    document.querySelector('.vision p').innerText = 'We envision a world where construction safety is a top priority, and scaffolding systems play a vital role in building sustainable infrastructures globally.';
    // Values Section
    document.querySelector('.values h3').innerText = 'Our Values';
    document.querySelector('.values p').innerText = 'Integrity, safety, innovation, and quality are at the core of our business. We are dedicated to upholding these principles in every project we undertake.';
    // Services Section
    document.querySelector('.services h2').innerText = 'Our Services';
    document.querySelector('.card:nth-child(1) h3').innerText = 'Scaffolding Installation';
    document.querySelector('.card:nth-child(1) p').innerText = 'We provide safe and reliable scaffolding installation services.';
    document.querySelector('.card:nth-child(2) h3').innerText = 'Scaffolding Inspection';
    document.querySelector('.card:nth-child(2) p').innerText = 'Ensure your scaffolding is compliant with safety regulations.';
    document.querySelector('.card:nth-child(3) h3').innerText = 'Scaffolding Maintenance';
    document.querySelector('.card:nth-child(3) p').innerText = 'Keep your scaffolding in top condition with our maintenance services.';
    document.querySelector('.card:nth-child(4) h3').innerText = 'Scaffolding Dismantling';
    document.querySelector('.card:nth-child(4) p').innerText = 'We offer fast and efficient dismantling of scaffolding structures.';
    // Our Work Section
    document.querySelector('.our-work h2').innerText = 'Our Work';
    document.querySelector('.our-work p').innerText = 'A showcase of our recent scaffolding projects.';
    // Contact Section
    document.querySelector('.contact h2').innerText = 'Contact Us';
    document.querySelector('.contact p').innerText = 'We would love to hear from you!';
    document.querySelector('.contact-info .address').innerHTML = '<strong>Address:</strong> Via Cesare Battisti, 15, 20016 Pero MI, Italy';
    document.querySelector('.contact-info .email').innerHTML = '<strong>Email:</strong> <a href="mailto:info@scaffoldingco.it" class="text-blue-500">Mgponteggi@yahoo.com</a>';
    document.querySelector('.contact-info .phone').innerHTML = '<strong>Phone:</strong> <a href="tel:+39123456789" class="text-blue-500">+39 328 052 7010</a>';
    
    // Change Button Text Back to "Italiano"
    languageSwitchBtn.innerText = 'Italiano';

  } else {
    // Hero Section
    document.querySelector('h1 > span:nth-child(1)').innerHTML = 'Soluzioni di Ponteggi di Fiducia';
    document.querySelector('h1 > span:nth-child(2)').innerHTML = 'dal Suolo al Cielo.';
    // About Us Section
    document.querySelector('#about h2').innerText = 'Chi Siamo';
    document.querySelector('#about p').innerText = 'Siamo un\'azienda italiana specializzata nella fornitura di soluzioni di ponteggi sicuri e innovativi per progetti commerciali e industriali.';
    // Mission Section
    document.querySelector('.mission h3').innerText = 'La Nostra Missione';
    document.querySelector('.mission p').innerText = 'Fornire soluzioni di ponteggio affidabili che soddisfino i più elevati standard di sicurezza, migliorando i processi di costruzione con durata e precisione.';
    // Vision Section
    document.querySelector('.vision h3').innerText = 'La Nostra Visione';
    document.querySelector('.vision p').innerText = 'Immaginiamo un mondo in cui la sicurezza delle costruzioni è una priorità assoluta e i sistemi di ponteggio svolgono un ruolo essenziale nella costruzione di infrastrutture sostenibili a livello globale.';
    // Values Section
    document.querySelector('.values h3').innerText = 'I Nostri Valori';
    document.querySelector('.values p').innerText = 'Integrità, sicurezza, innovazione e qualità sono al centro del nostro business. Siamo dedicati a mantenere questi principi in ogni progetto che intraprendiamo.';
    // Services Section
    document.querySelector('.services h2').innerText = 'I Nostri Servizi';
    document.querySelector('.card:nth-child(1) h3').innerText = 'Installazione di Ponteggi';
    document.querySelector('.card:nth-child(1) p').innerText = 'Offriamo servizi di installazione di ponteggi sicuri e affidabili.';
    document.querySelector('.card:nth-child(2) h3').innerText = 'Ispezione dei Ponteggi';
    document.querySelector('.card:nth-child(2) p').innerText = 'Assicurati che i tuoi ponteggi siano conformi alle normative di sicurezza.';
    document.querySelector('.card:nth-child(3) h3').innerText = 'Manutenzione dei Ponteggi';
    document.querySelector('.card:nth-child(3) p').innerText = 'Mantieni i tuoi ponteggi in ottime condizioni con i nostri servizi di manutenzione.';
    document.querySelector('.card:nth-child(4) h3').innerText = 'Smontaggio dei Ponteggi';
    document.querySelector('.card:nth-child(4) p').innerText = 'Offriamo uno smontaggio rapido ed efficiente delle strutture di ponteggio.';
    // Our Work Section
    document.querySelector('.our-work h2').innerText = 'Il Nostro Lavoro';
    document.querySelector('.our-work p').innerText = 'Una vetrina dei nostri recenti progetti di ponteggio.';
    // Contact Section
    document.querySelector('.contact h2').innerText = 'Contattaci';
    document.querySelector('.contact p').innerText = 'Ci piacerebbe sentirti!';
    document.querySelector('.contact-info .address').innerHTML = '<strong>Indirizzo:</strong> Via Cesare Battisti, 15, 20016 Pero MI, Italia';
    document.querySelector('.contact-info .email').innerHTML = '<strong>Email:</strong> <a href="mailto:info@scaffoldingco.it" class="text-blue-500">Mgponteggi@yahoo.com</a>';
    document.querySelector('.contact-info .phone').innerHTML = '<strong>Telefono:</strong> <a href="tel:+39123456789" class="text-blue-500">+39 328 052 7010</a>';
    
    // Change Button Text Back to "English"
    languageSwitchBtn.innerText = 'English';
  }
});
