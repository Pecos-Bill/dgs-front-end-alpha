const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Vue build
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html (for Vue Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});