$(document).ready(() => {
  
  $('form').submit((event) => {
    event.preventDefault();
    let val = $('input').val();

    fetch('/sort', {
      method: 'POST',
      body: JSON.stringify({val}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res => res.json()))
    .then((response => {
      console.log(response);
      $('table').append(`<tr><td>${val}</td><td>${response.sorted}</td></tr>`);
    }))

    $('input').val('');
  });
}); 
  