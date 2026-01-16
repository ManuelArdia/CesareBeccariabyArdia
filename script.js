// =======================
// TYPEWRITER QUOTE
// =======================
const quoteText = "È meglio prevenire i delitti che punirli";
const quoteElement = document.getElementById("quote");
let index = 0;

function typeQuote() {
  if (index < quoteText.length) {
    quoteElement.innerHTML += quoteText.charAt(index);
    index++;
    setTimeout(typeQuote, 60);
  }
}

typeQuote();

// =======================
// SCROLL REVEAL
// =======================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});

// =======================
// PALLINE / NEVE SU CARDS
// =======================
const navCards = document.querySelectorAll(".nav-card");

navCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement("span");
      particle.classList.add("particle");
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = "100%";
      particle.style.animationDuration = 3 + Math.random() * 2 + "s";
      card.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 5000);
    }
  });
});
