const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    popup.style.display = 'flex'; // Show popup
    form.reset(); // Optional: reset form
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Close popup
});

// Close popup when clicking outside the content
window.addEventListener('click', (e) => {
    if(e.target == popup) {
        popup.style.display = 'none';
    }
});