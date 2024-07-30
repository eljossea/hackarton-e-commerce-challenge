
function validation() {
  const username = document.formFill.Username.value;
  const email = document.formFill.Email.value;
  const password = document.formFill.Password.value;
  const confirmPassword = document.formFill.CPassword.value;
  const resultElement = document.getElementById("result");
  const popup = document.getElementById("popup");

  if (username === "") {
      resultElement.innerHTML = "Enter Username";
      return false;
  } else if (username.length < 6) {
      resultElement.innerHTML = "Username should be at least six characters";
      return false;
  } else if (email === "") {
      resultElement.innerHTML = "Enter your Email";
      return false;
  } else if (password === "") {
      resultElement.innerHTML = "Enter your Password";
      return false;
  } else if (password.length < 6) {
      resultElement.innerHTML = "Password must be more than 6 characters";
      return false;
  } else if (confirmPassword === "") {
      resultElement.innerHTML = "Confirm Password";
      return false;
  } else if (password !== confirmPassword) {
      resultElement.innerHTML = "Password does not match";
      return false;
  } else {
      const user = {
          username: username,
          email: email,
          password: password,
      };

      localStorage.setItem(email, JSON.stringify(user));
      popup.classList.add("openSlide");
      return false;
  }
}



function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const resultElement = document.getElementById("loginResult");

  // Fetch the user by email
  const storedUser = JSON.parse(localStorage.getItem(email));

  if (!storedUser) {
      resultElement.innerHTML = "Invalid";
      return false;
  }

  if (storedUser.password !== password) {
      resultElement.innerHTML = "Invalid Password";
      return false;
  }

  else{
  resultElement.innerHTML = "Login successful!";
  
  // setTimeout(function() {
  //     window.location.href = 'checkOut.html';
  // }, 2000);
  
  setTimeout(function() {
    window.location.href = 'shop.html';
}, 2000);
  return false;
}

}

