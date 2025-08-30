// Typing Animation
const tagline = "Aspiring AI & Software Developer";
let i = 0;
const typingText = document.querySelector(".typing-text");

function typeWriter() {
  if(i < tagline.length) {
    typingText.innerHTML += tagline.charAt(i);
    i++;
    setTimeout(typeWriter, 90);
  }
}
typeWriter();

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌞' : '🌙';
});

// Animate Skills on Scroll
const skillSection = document.querySelector(".skills-section");
const skillBars = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll", () => {
  const sectionTop = skillSection.offsetTop;
  const scrollY = window.scrollY + window.innerHeight;

  if(scrollY > sectionTop + 100) {
    skillBars.forEach(bar => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
  }
});



  // Fade-in animation
  const faders = document.querySelectorAll('.fade-in');
  faders.forEach(fader => {
    const top = fader.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      fader.style.opacity = 1;
      fader.style.transform = 'translateY(0)';
    }
  });
;

const projectCards = document.querySelectorAll(".project-card");
const filterBtns = document.querySelectorAll(".filter-btn");

// Show cards with scroll animation
window.addEventListener("scroll", () => {
  projectCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 100) {
      card.classList.add("show");
    }
  });
});

// Filter functionality
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    projectCards.forEach(card => {
      if(filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("show"), 50);
      } else {
        card.style.display = "none";
        card.classList.remove("show");
      }
    });
  });
});

const achievementCards = document.querySelectorAll(".achievement-card");

window.addEventListener("scroll", () => {
  achievementCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 100) {
      card.classList.add("show");
    }
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const formStatus = document.getElementById('formStatus');

  emailjs.sendForm('service_yauuh9s', 'template_rntklyf', this)
    .then(() => {
        formStatus.style.opacity = 1;
        formStatus.textContent = '✅ Message sent successfully!';
        this.reset();
        setTimeout(() => formStatus.style.opacity = 0, 4000);
    }, (error) => {
        formStatus.style.opacity = 1;
        formStatus.textContent = '❌ Failed to send message. Try again!';
        setTimeout(() => formStatus.style.opacity = 0, 4000);
    });
});

