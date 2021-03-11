const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.height = document.documentElement.clientHeight - canvas.offsetTop;
canvas.width = document.documentElement.clientWidth;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;
ctx.strokeRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
// canvas.addEventListener('mouseout', () => (isDrawing = false));

const form = document.querySelector('#form');

form.addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'color': {
      e.target.addEventListener('input', function () {
        ctx.strokeStyle = this.value;
      });
    }
    case 'line-size': {
      e.target.addEventListener('input', function () {
        ctx.lineWidth = this.value;
      });
    }
  }
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  ctx.clearRect(5, 5, canvas.width - 10, canvas.height - 10);
  ctx.beginPath();
});
