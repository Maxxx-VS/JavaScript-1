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
this.speed = (this.weight / maxWeidht) * maxSpeed; //скорость

this.update = function() {
    this.x += Math.cos(this.a) * this.r;
    this.a += this.aStep;
    this.y += this.speed;
    }
}