// Placeholder for future interactions (like animations or downloads)
console.log("Welcome to Shrutika's Portfolio!");

// Scroll to section smoothly (optional with scroll-behavior CSS)
// Can add animations or interactions later

console.log("Portfolio Loaded Successfully");

// Simple scroll animation (fade-in effect)
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + window.innerHeight;
  sections.forEach(section => {
    if (scrollY > section.offsetTop + 100) {
      section.classList.add('visible');
    }
  });
});

// Responsive menu toggle
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Typing Animation
const roles = ["Frontend Developer", "Android Developer", "Coder", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;

function typeText() {
  const textElement = document.getElementById("typed-text");
  if (!textElement) return;

  if (charIndex < roles[index].length) {
    textElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  const textElement = document.getElementById("typed-text");
  if (!textElement) return;

  if (charIndex > 0) {
    textElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeText);

// Scroll animation (still active from Step 3)
const section = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight;
  sections.forEach(section => {
    if (scrollY > section.offsetTop + 100) {
      section.classList.add("visible");
    }
  });
});

// Contact Form Validation
const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Basic validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    statusMsg.textContent = "Please fill out all fields.";
    statusMsg.style.color = "red";
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    statusMsg.textContent = "Please enter a valid email.";
    statusMsg.style.color = "red";
    return;
  }

  // If validation passes
  statusMsg.textContent = "Message sent successfully!";
  statusMsg.style.color = "green";

  // Clear form fields
  form.reset();
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: change icon
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
