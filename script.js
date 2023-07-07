const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  fetch('/submit-form', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert('Your message has been sent!');
    form.reset();
  })
  .catch(error => {
    alert('There was an error sending your message. Please try again later.');
  });
});

