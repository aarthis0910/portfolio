document.getElementById('subscribe-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert(`Subscribed with email: ${email}`);
  this.reset();
});
