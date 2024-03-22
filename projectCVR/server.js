/*// server.js
//import mongoose from 'mongoose';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Database connection
mongoose.connect('mongodb+srv://poojagottimukkula1512:CMCDhWn2ATOcFtt6@cluster0.pyzf8sh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
 console.log('App is connected to Database');
 app.listen(5000,()=>{
    console.log('app is listening to port: 5000');
});
})


// User schema and model
const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Routes

// User registration
app.post('/register', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// User login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Meeting scheduling
app.post('/schedule-meeting', (req, res) => {
    // Add logic to schedule a meeting
    res.json({ message: 'Meeting scheduled' });
});

// Search
app.get('/search', (req, res) => {
    const query = req.query.q;
    // Add logic to search topics based on query
    res.json({ results: ['Topic 1', 'Topic 2', 'Topic 3'] });
});

// Start server
/*
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); */
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
  