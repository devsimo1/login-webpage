// Import required modules
const express = require('express');

// Create Express app
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Set up static files directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // Handle login logic here
  // For simplicity, let's assume valid credentials are 'admin' and 'password'

  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
