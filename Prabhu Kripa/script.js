window.addEventListener("scroll", function () {
  const topBar = document.querySelector(".top-bar");
  if (window.scrollY > 10) {
    topBar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  } else {
    topBar.style.boxShadow = "none";
  }
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.modern-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Close menu on link click (mobile)
document.querySelectorAll('.menu ul li a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

/* ===== Change Navbar Background on Scroll ===== */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Simple fade-in on scroll
const heroContent = document.querySelector(".hero-content");
window.addEventListener("load", () => {
  heroContent.style.opacity = "0";
  heroContent.style.transform = "translateY(20px)";
  setTimeout(() => {
    heroContent.style.transition = "all 1s ease";
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
  }, 300);
});
