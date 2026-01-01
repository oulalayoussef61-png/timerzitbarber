// Navbar shadow on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});