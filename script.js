// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// Smooth scroll close menu (mobile)

document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});

// Simple scroll animation effect

window.addEventListener("scroll", () => {
const sections = document.querySelectorAll("section");

sections.forEach(sec => {
const top = window.scrollY;
const offset = sec.offsetTop - 150;
const height = sec.offsetHeight;

if (top >= offset && top < offset + height) {
sec.style.opacity = "1";
sec.style.transform = "translateY(0)";
}
});
});

// Initial animation setup

document.querySelectorAll("section").forEach(sec => {
sec.style.opacity = "0";
sec.style.transform = "translateY(30px)";
sec.style.transition = "all 0.6s ease";
});

// Form submit fake handler

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
e.preventDefault();
alert("Message sent successfully! 🚀");
form.reset();
});