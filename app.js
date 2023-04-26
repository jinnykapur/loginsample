const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("show-password");

showPasswordCheckbox.addEventListener("change", function() {
  if (this.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

const loginForm = document.getElementById("login-form");
const signupButton = document.getElementById("signup-btn");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // handle login form submission here
});

signupButton.addEventListener("click", function() {
  // handle new user registration here
});
