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
    this.a += this.aStep; //
    this.y += this.speed;
    }
}

function init() {
    var i = numFlakes,
        flakes,
        x,
        y;
    
    while (i--) {
        x = randomBetween(0, windowW, true);
        y = randomBetween(0, windowH, true)
    }



}