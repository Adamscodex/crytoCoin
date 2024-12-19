




document.getElementById("register-button").addEventListener("click", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (username && email && password) {
      document.getElementById("success-message").style.display = "block";
      document.getElementById("username-display").innerHTML = username;
      document.getElementById("email-display").innerHTML = email;
      document.getElementById("registration-form").style.display = "none";
  } else {
      alert("Please fill in all fields.");
  }
});

document.getElementById("login-button").addEventListener("click", function() {
  window.location.href = "wallet.html";
});
