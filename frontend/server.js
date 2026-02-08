const express = require('express');
const app = express();

app.use(express.static('templates'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/index.html');
});

app.listen(3000,"0.0.0.0", () => {
  console.log('Frontend running on port 3000');
});
