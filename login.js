
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