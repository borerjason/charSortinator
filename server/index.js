const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const charSort = require('./SortChars');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../app')));


app.post('/word', (req, res) => {
  console.log('PINGED');
  console.log(req.body);
  let word = req.body.val;
  let sorted = charSort(word); 
  console.log('WORD', sorted);
  res.send(200, word);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});