document.getElementById('notify-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('notify-confirmation').classList.remove('hidden');
});

document.getElementById('close-overlay').addEventListener('click', function () {
  document.getElementById('overlay').style.display = 'none';
});
