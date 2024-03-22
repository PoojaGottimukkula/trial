document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Simulate login
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check login credentials (this is just a dummy check)
    if (username === 'admin' && password === 'password') {
      // Redirect to dashboard or load dashboard content
      alert('Login successful! Redirecting to dashboard...');
      window.location.href = 'Dashboard.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });