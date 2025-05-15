// Optional: client-side login simulation (no effect if removed)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorMsg = document.getElementById('errorMsg');

  form.addEventListener('submit', (e) => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Simulate credential check (optional)
    if (email === "user@mymts.net" && password === "password123") {
      // Allow form to submit
    } else {
      e.preventDefault();
      errorMsg.style.display = 'block';
      errorMsg.textContent = "Login incorrect";
    }
  });
});
