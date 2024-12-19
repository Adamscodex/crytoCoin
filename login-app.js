const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    errorMessage.textContent = 'Please enter both username and password.';
    return;
  }

  // TO DO: Add authentication logic here

  // For demonstration purposes, assume authentication is successful
  errorMessage.textContent = '';
  window.location.href = 'wallet.html';
});

