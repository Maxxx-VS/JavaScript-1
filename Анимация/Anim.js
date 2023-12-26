var canvas = document.querySelector('.snow'),
    ctx = canvas.getContext('2d'),
    windowW = window.innerWidth,
    windowH = window.innerHeight,
    numFlakes = 200,
    flakes = [];

function Flake(x, y) {
    var maxWeidht = 5,
        maxSpeed = 3;
} 

this.x = x;
this.y = y;
this.r = randomBetween(0, 1);
this.a = randomBetween(0, Math.PI);
this.aStep = 0.01;

this.weight = randomBetween(2, maxWeidht);
