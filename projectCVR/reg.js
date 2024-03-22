document.addEventListener("DOMContentLoaded", function() {
    // Select the registration form
    const registerForm = document.getElementById("registerForm");
  
    // Add event listener for form submission
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get form inputs
      const newUsername = document.getElementById("newUsername").value.trim();
      const email = document.getElementById("email").value.trim();
      const newPassword = document.getElementById("newPassword").value.trim();
      const password = document.getElementById("password").value.trim();
  
      // Basic validation
      if (newUsername === "" || email === "" || newPassword === "" || password === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      if (newPassword !== password) {
        alert("Passwords do not match.");
        return;
      }
  
      // Check if the user is already registered
      // For demonstration, let's assume the user is already registered with username "john_doe"
      const registeredUsernames = ["john_doe"]; // This could be fetched from the server
  
      if (registeredUsernames.includes(newUsername)) {
        alert("This username is already registered.");
        return;
      }
  
      // If all validations pass, you can proceed with form submission
      // For simplicity, we'll just log the form data
      console.log("New Username:", newUsername);
      console.log("Email:", email);
      console.log("Password:", newPassword);
  
      // Here you can perform AJAX request to submit the form data to the server
      // Example:
      // fetch("submit_registration.php", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     username: newUsername,
      //     email: email,
      //     password: newPassword
      //   }),
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data);
      // })
      // .catch(error => {
      //   console.error("Error:", error);
      // });
  
      // Optionally, reset the form after submission
      registerForm.reset();
    });
  });
  