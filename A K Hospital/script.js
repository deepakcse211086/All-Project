/* ===== MOBILE MENU TOGGLE ===== */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ===== CLOSE MENU WHEN LINK CLICKED ===== */
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = image.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove("active");
  }
});

const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t) => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

function prevTestimonial() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
}

nextBtn.addEventListener("click", nextTestimonial);
prevBtn.addEventListener("click", prevTestimonial);

// Auto Slide every 5 seconds
setInterval(nextTestimonial, 5000);

const form = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const department = document.getElementById("department").value;
  const date = document.getElementById("date").value;

  if (name === "" || phone === "" || department === "" || date === "") {
    formMessage.style.color = "#e63946";
    formMessage.textContent = "Please fill all required fields!";
    return;
  }

  if (phone.length < 10) {
    formMessage.style.color = "#e63946";
    formMessage.textContent = "Please enter a valid phone number!";
    return;
  }

  formMessage.style.color = "#00b4ff";
  formMessage.textContent =
    "Appointment submitted successfully! We will contact you soon.";

  form.reset();
});

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const message = document.getElementById("cmessage").value.trim();

  if (name === "" || email === "" || message === "") {
    contactMessage.style.color = "#e63946";
    contactMessage.textContent = "Please fill all fields!";
    return;
  }

  contactMessage.style.color = "#00b4ff";
  contactMessage.textContent =
    "Message sent successfully! We will contact you soon.";

  contactForm.reset();
});
