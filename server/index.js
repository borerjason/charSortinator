const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const charSort = require('./SortChars');

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../app')));

app.post('/word', (req, res) => {
  let word = req.body.val;
  let sorted = charSort(word); 
  res.send(200, { word });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});