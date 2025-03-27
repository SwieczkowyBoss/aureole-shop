document.getElementById('close-overlay').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  localStorage.setItem('overlayClosed', 'true');
});

window.addEventListener('load', () => {
  if (localStorage.getItem('overlayClosed') === 'true') {
    document.getElementById('overlay').style.display = 'none';
  }
});

document.getElementById('notify-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = e.target.querySelector('input[type="email"]');
  const confirmation = document.getElementById('notify-confirmation');
  const email = emailInput.value;

  // symulacja zapisu (docelowo: backend/API)
  console.log("Zapisano e-mail:", email);
  confirmation.classList.remove('hidden');
  emailInput.value = '';
});
