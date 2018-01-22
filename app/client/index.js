$(document).ready(() => {


  $('form').submit((event) => {
    event.preventDefault();
    let val = $('input').val();
    fetch('/word', {
      method: 'POST',
      body: JSON.stringify(val),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((result) => {
      console.log(response);
    });
  })

});
  