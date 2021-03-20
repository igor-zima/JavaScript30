class Player {
  constructor(player) {
    this.player = player;
    this.video = this.player.firstElementChild;
    this.toggle = this.player.querySelector('.toggle');
    this.progress = this.player.querySelector('.progress');
    this.volume = this.player.querySelector('#volume');
    this.#start();
  }

  #start() {
    this.video.addEventListener('loadeddata', () => {
      this.video.addEventListener('click', this.togglePlay);
      this.toggle.addEventListener('click', this.togglePlay);
      this.video.addEventListener('timeupdate', this.handleProgress);
      this.progress.addEventListener('click', this.scrub);
      this.volume.addEventListener('input', this.handleRangeUpdate);
      this.video.addEventListener('timeupdate', this.updateTime);
    });
  }

  timeToString(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60) - hours * 60;
    const seconds = Math.floor(time % 60);

    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
    ].join(':');
  }

  updateTime = () => {
    const currentTime = this.player.querySelector('.current-time');
    const duration = this.player.querySelector('.video-duration');

    currentTime.textContent = '00:00';
    duration.textContent = this.timeToString(this.video.duration);
    currentTime.textContent = this.timeToString(this.video.currentTime);
  };

  togglePlay = () => {
    const mode = this.video.paused ? 'play' : 'pause';
    const icon = mode === 'pause' ? '►' : '❚ ❚';
    this.toggle.textContent = icon;
    this.video[mode]();
  };

  handleProgress = () => {
    const progressBar = this.player.querySelector('.progress__filled');
    const percent = (this.video.currentTime / this.video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  };

  handleRangeUpdate = (e) => {
    this.video[e.target.name] = e.target.value;
  };

  scrub = (e) => {
    const scrubTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
    this.video.currentTime = scrubTime;
  };
}

const player = document.querySelector('.player');

const newPlayer = new Player(player);
