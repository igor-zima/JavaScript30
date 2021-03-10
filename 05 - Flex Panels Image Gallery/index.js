const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  panels.forEach((el) => {
    if (el !== this) {
      el.classList.remove('open-active', 'open');
      el.removeEventListener('transitionend', toggleActive);
    }
  });
  if (!this.classList.contains('open')) {
    this.classList.toggle('open');
    this.addEventListener('transitionend', toggleActive);
  }
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));
