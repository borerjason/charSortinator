const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const charSort = require('./SortChars');

const app = express();

app.use('/', express.static(path.join(__dirname, '../app')));

bodyparser.urlEncoded();

app.get('/word', (req, res) => {
  console.log(req.body);
  let word = req.body;
  let sorted = charSort(); 
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});