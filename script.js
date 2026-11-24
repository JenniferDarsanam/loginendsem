
// Store sample user credentials
if (!localStorage.getItem("userEmail")) {
    localStorage.setItem("userEmail", "user@gmail.com");
    localStorage.setItem("userPassword", "12345");
}

// Get DOM elements
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const toggleBtn = document.getElementById("toggleBtn");

// Show and hide password
toggleBtn.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
        toggleBtn.textContent = "HIDE";
    } else {
        password.type = "password";
        toggleBtn.textContent = "SHOW";
    }

});

// Login form event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    const enteredEmail = email.value.trim();
    const enteredPassword = password.value;

    if (enteredEmail === savedEmail &&
        enteredPassword === savedPassword) {

        message.textContent = "✓ Login Successful!";
        message.style.color = "green";

        form.reset();

    } else {

        message.textContent = "✗ Invalid Email or Password";
        message.style.color = "red";

    }

});
