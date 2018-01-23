$(document).ready(() => {
  
  // const axios = require('axios');
  
  $('form').submit((event) => {
    event.preventDefault();
    let val = $('input').val();
    console.log(val);

    // axios.post('/word', {
    //   body: val
    fetch('/word', {
      method: 'POST',
      body: JSON.stringify({val}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  });
}); 
  