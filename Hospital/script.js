// // Navbar Burger Menu Toggle
// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });

// // Smooth Scroll for Links
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', function(e){
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({ behavior: 'smooth' });
//         if(nav.classList.contains('active')){
//             nav.classList.remove('active');
//         }
//     });
// });