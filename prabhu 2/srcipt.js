// Scroll background change
window.addEventListener("scroll", function(){
    const navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else{
        navbar.classList.remove("scrolled");
    }
});

// Mobile toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function(){
    navMenu.classList.toggle("active");
});