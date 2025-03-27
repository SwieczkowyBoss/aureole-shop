document.getElementById('notify-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('notify-confirmation').classList.remove('hidden');
});
