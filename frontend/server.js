const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';

// Serve static files from the 'templates' directory
app.use(express.static('templates'));

// Proxy /bmi requests to the Flask backend
app.use('/bmi', createProxyMiddleware({ target: backendUrl, changeOrigin: true }));

// Route for the root path to serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/index.html');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
  console.log(`Proxying /bmi to ${backendUrl}`);
});