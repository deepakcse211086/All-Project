

/* Navbar background change on scroll */
window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* Mobile Menu Toggle */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* ===== Counter Animation ===== */

const counters = document.querySelectorAll('.counter');
let started = false;

function startCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 100;

        const updateCount = () => {
            if (count < target) {
                count += speed;
                counter.innerText = Math.floor(count);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

window.addEventListener("scroll", () => {
    const section = document.querySelector(".why-choose");
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY > sectionTop - sectionHeight / 2 && !started) {
        startCounters();
        started = true;
    }
});

/* ===== Portfolio Filter ===== */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        document.querySelector(".filter-btn.active").classList.remove("active");
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        portfolioItems.forEach(item => {
            if(filter === "all" || item.classList.contains(filter)){
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

    });
});

/* ===== Testimonial Auto Slider ===== */

const testimonials = document.querySelectorAll(".testimonial-card");
let index = 0;

function showTestimonial() {
    testimonials.forEach(card => card.classList.remove("active"));
    testimonials[index].classList.add("active");
    index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 4000);

