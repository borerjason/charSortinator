const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const charSort = require('./SortChars');

const app = express();

app.use('/', express.static(path.join(__dirname, '../app')));
app.use(bodyParser.json());

app.post('/sort', (req, res) => {
  let word = req.body.val;
  let sorted = charSort(word); 
  res.send(200, { sorted });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});