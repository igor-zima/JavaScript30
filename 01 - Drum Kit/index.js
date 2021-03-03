const sounds = {
  boom: './sounds/boom.wav',
  clap: './sounds/clap.wav',
  hihat: './sounds/hihat.wav',
  kick: './sounds/kick.wav',
  openhat: './sounds/openhat.wav',
  ride: './sounds/ride.wav',
  snare: './sounds/snare.wav',
  tink: './sounds/tink.wav',
  tom: './sounds/tom.wav',
};

const addKey = document.querySelector('.key--add');

addKey.addEventListener('click', getKey);

function getKey() {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal__body');

  modalBody.textContent = 'Press any key';

  const image = document.createElement('img');
  image.classList.add('keyboard-ico');
  image.src = './keyboard.svg';

  modalBody.prepend(image);

  modal.append(modalBody);

  document.body.append(modal);

  window.addEventListener('keydown', getSound);
}

function getSound(e) {
  document.querySelector('.modal').remove();

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal__body');

  const select = document.createElement('select');
  select.classList.add('modal__select');
  select.setAttribute('name', 'sounds');
  select.setAttribute('id', 'sounds');

  const soundsKey = Object.keys(sounds);

  soundsKey.forEach((el) => {
    const option = document.createElement('option');
    option.setAttribute('value', el);
    option.textContent = el;

    select.append(option);
  });

  const button = document.createElement('button');
  button.classList.add('modal__btn');
  button.textContent = 'OK';

  modalBody.append(select);

  modalBody.append(button);

  modal.append(modalBody);

  document.body.append(modal);

  window.removeEventListener('keydown', getSound);

  let selectValue = select.value;

  select.addEventListener('change', (e) => (selectValue = e.target.value));

  button.addEventListener('click', () => {
    createKey(e, selectValue);
    modal.remove();
  });
}

function createKey({ key, code }, selectValue) {
  const keyWrap = document.createElement('div');
  keyWrap.classList.add('key');
  keyWrap.dataset.key = code;

  const kbd = document.createElement('kbd');
  kbd.textContent = key;

  const span = document.createElement('span');
  span.textContent = selectValue;
  span.classList.add('sound');

  const audio = document.createElement('audio');
  audio.src = sounds[selectValue];
  audio.dataset.key = code;

  keyWrap.append(kbd, span, audio);

  const keys = document.querySelector('.keys');
  keys.append(keyWrap);

  keyWrap.addEventListener('transitionend', () => keyWrap.classList.remove('key--active'));
}

window.addEventListener('keydown', (e) => {
  const key = document.querySelector(`.key[data-key='${e.code}']`);
  const audio = document.querySelector(`audio[data-key='${e.code}']`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('key--active');
});
