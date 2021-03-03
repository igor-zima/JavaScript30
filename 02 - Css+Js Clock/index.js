const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondsHand = document.querySelector('.seconds-hand');

function clock() {
  const time = new Date();

  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegree = (hour / 12) * 360;
  const minuteDegree = (minute / 60) * 360;
  const secondsDegree = (seconds / 60) * 360;

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(clock, 1000);
