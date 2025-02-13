document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Validate password: at least 8 characters, includes both letters and numbers
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    if (passwordRegex.test(password)) {
      // Show success message if password is valid
      alert("Login Successful");
    } else {
      // If password doesn't match the required pattern
      alert("Password must be at least 8 characters long and contain both letters and numbers.");
    }
  });
  