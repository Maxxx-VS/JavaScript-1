var canvas = document.querySelector('.snow'),
    ctx = canvas.getContext('2d'),
    windowW = window.innerWidth,
    windowH = window.innerHeight,
    numFlakes = 200,
    flakes = [];

function Flake(x, y) {
  var maxWeight = 5,
      maxSpeed = 3;

  this.x = x;
  this.y = y;
  this.r = randomBetween(0, 1);
  this.a = randomBetween(0, Math.PI);
  this.aStep = 0.01;


  this.weight = randomBetween(2, maxWeight);
  this.alpha = (this.weight / maxWeight);
  this.speed = (this.weight / maxWeight) * maxSpeed;

  this.update = function() {
    this.x += Math.cos(this.a) * this.r;
    this.a += this.aStep; // поворот снежинки

    this.y += this.speed;
  }

}

function init() {
  var i = numFlakes,
      flake,
      x,
      y;

  while (i--) {
    x = randomBetween(0, windowW, true);
    y = randomBetween(0, windowH, true);


    flake = new Flake(x, y);
    flakes.push(flake);
  }

  scaleCanvas();// изменяет размер холста
  loop(); // как ткинтер анимирует
}

function scaleCanvas() {
  canvas.width = windowW;
  canvas.height = windowH;
}

function loop() {
  var i = flakes.length,
      z,
      dist,
      flakeA,
      flakeB;

  // очистить холст
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, windowW, windowH);
  // прозрачный прямоугольник который устанавливается
  //на весь холст и удаляет предыдущий кадр
  ctx.restore();

  // петля
  while (i--) { //для каждой снежинки

    flakeA = flakes[i];
    flakeA.update();
    ctx.beginPath();
    ctx.arc(flakeA.x, flakeA.y, flakeA.weight, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(255, 255, 255, ' + flakeA.alpha + ')';
    ctx.fill();

    if (flakeA.y >= windowH) {
      flakeA.y = -flakeA.weight;
    }
  }

  requestAnimationFrame(loop);
}

function randomBetween(min, max, round) {
  var num = Math.random() * (max - min + 1) + min;

  if (round) {
    return Math.floor(num);
  } else {
    return num;
  }
}


init();