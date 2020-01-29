const express = require('express');

const log = console.log;
const app = express();
const path = require('path');

const Port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => log('Server is starting on PORT, ', 8080));


