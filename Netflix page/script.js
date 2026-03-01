// Get modal, button and close span
const modal = document.getElementById("signInModal");
const btn = document.getElementById("signInBtn");
const closeBtn = document.querySelector(".close");

// Open modal on button click
btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal on clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Handle form submission
document.getElementById("signInForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  alert(`Registered Successfully!\nUsername: ${username}\nEmail: ${email}`);
  modal.style.display = "none";

  e.target.reset();
});