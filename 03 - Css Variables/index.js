const inputs = document.querySelectorAll('input');

function handler() {
  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

  this.previousElementSibling.querySelector('.value').textContent = this.value + suffix;
}

inputs.forEach((input) => input.addEventListener('input', handler));
