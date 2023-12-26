var canvas = document.querySelector('.snow'),
    ctx = canvas.getContext('2d'),
    windowW = window.innerWidth,
    windowH = window.innerHeight,
    numFlakes = 200, //кол-во снежков
    flakes = [];  //массив для снежков

function Flake(x, y) {
    var maxWeidht = 5,
        maxSpeed = 3;

this.x = x; //координаты снежков
this.y = y; //координаты снежков
this.r = randomBetween(0, 1);  //радиус снежков
this.a = randomBetween(0, Math.PI);  //угол под которым снежинка движется
this.aStep = 0.01; //шаг изменения угла или растояния

this.weight = randomBetween(2, maxWeidht); //объем
this.alpha = (this.weight / maxWeidht); //разница
this.speed = (this.weight / maxWeidht) * maxSpeed; //скорость снежков

this.update = function() { //обновляет состояние снежков
    this.x += Math.cos(this.a) * this.r; //позволяет снежк перемещаться по горизонтали в зависимости от угла и радиуса
    this.a += this.aStep; //эффек поворота снежка
    this.y += this.speed; //скорость снежка
    }
}

function init() {
    var i = numFlakes,
        flakes,
        x,
        y;
    
    while (i--) {
        x = randomBetween(0, windowW, true);
        y = randomBetween(0, windowH, true);

        flake = new Flake(x, y);
        flakes.push(fake);
    }
    scaleCanvas(); //Изменяет размер холста
    loop(); //анимирукт как в ТКинтер
}

function scaleCanvas() {
    canvas.widht = windowW;
    canvas.height = windowH;
}

function loop() {
    var i = flakes.length,
        z,
        dist,
        flakeA,
        flakeB;
}

ctx.save(); //очистить холст
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0, 0, windowW, windowH); //прозрачный прямоугольник удаляющий предыдущий кадр
ctx.restore();

while (i--) { //для каждой снежинки
    flakeA = flakes[i];
    flakeA.update();
    ctx.beginPath();
    ctx.arc(flakeA.x, flakeA.y, flakeA.weight, 0, 2 + Math.PI, false);
    ctx.fillStyle = 'rgba(225, 225, 225, ' + flakeA.alpha + ')';
    ctx.fill();

    if (flakeA.y >= windowH) {
        flakeA.y + -flakeA.weight;
    }
}

requestAnimationFrame(loop);


function randomBetween(min, max, round) {
    var num = Math.random() + (max - min + 1) + min;
    if (round) {
        return Math.floor(num);
    } else {
        return num;
    }
}

