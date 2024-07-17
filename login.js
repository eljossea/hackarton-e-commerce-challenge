
// Form validation
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
		alert('Please fill in both username and password');
	} else {
		// Submit the form
		form.submit();
	}
});

// Forgot password functionality
const forgotPasswordLink = document.querySelector('.forgot-password a');
forgotPasswordLink.addEventListener('click', (e) => {
	e.preventDefault();
	// TO DO: implement forgot password logic
});

// Create account functionality
const createAccountLink = document.querySelector('.create-account a');
createAccountLink.addEventListener('click', (e) => {
	e.preventDefault();
	// TO DO: implement create account logic
});


const formm = document.querySelector('.login-form');
formm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  // Validate username and password
  if (username && password) {
    // Login logic goes here
    // Redirect to home page
    window.location.href = 'design.html'; // or '/' or whatever your home page URL is
  } else {
    alert('Please fill in both username and password.');
  }
});

// OOOOOOOOOOOOOOOOOOOOOOOOOOOOO 

// JavaScript for form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Please enter both username/email and password.');
    event.preventDefault();
  }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
  var newUsername = document.getElementById('new-username').value;
  var newPassword = document.getElementById('new-password').value;
  var confirmPassword = document.getElementById('confirm-password').value;

  if (!newUsername || !newPassword || !confirmPassword) {
    alert('Please fill in all fields.');
    event.preventDefault();
  } else if (newPassword !== confirmPassword) {
    alert('Passwords do not match.');
    event.preventDefault();
  }
});

