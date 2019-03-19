'use strict';

const canvas = document.querySelector('#wall');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const circles = [];
const crosses = [];

function init() {

    const count = Math.round(getRandom(50, 200));

    for (let i = 0; i < count; i++) {

        circles.push({
            x0: Math.random() * canvas.width,
            y0: Math.random() * canvas.height,
            size: getRandom(0.1, 0.6),
            nextPointFunc: getRandom(0, 1) === 1 ? nextPoint : anotherNextPoint,
        });

        crosses.push({
            x0: Math.random() * canvas.width,
            y0: Math.random() * canvas.height,
            size: getRandom(0.1, 0.6),
            nextPointFunc: getRandom(0, 1) === 1 ? nextPoint : anotherNextPoint,
            angle: Math.round(getRandom(0, 360)) * Math.PI / 180,
            speed: getRandom(-0.2, 0.2)
        });
    }

    goAnimate();
}

/* Рандом */
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

/* Функия времени 1  */
function nextPoint(x, y, time) {

    return {
        x: x + Math.sin((x + (time / 10)) / 100) * 5,
        y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
    }
}

/* Функия времени 2 */
function anotherNextPoint(x, y, time) {

    return {
        x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
        y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
    };
}

/* Анимирование */
function goAnimate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach(drawCircle);
    crosses.forEach(drawCross);

    requestAnimationFrame(goAnimate);
}


/* Рисуем Круг */
function drawCircle(circle) {

    const x0 = circle.x0,
        y0 = circle.y0,
        size = circle.size,
        nextPointFunc = circle.nextPointFunc;

    const { x, y } = nextPointFunc(x0, y0, Date.now());

    ctx.beginPath();
    ctx.lineWidth = 5 * size;
    ctx.strokeStyle = 'white';
    ctx.arc(x, y, 12 * size, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
}

/* Рисуем Крест */
function drawCross(cross) {

    const x0 = cross.x0,
        y0 = cross.y0,
        size = cross.size,
        speed = cross.speed,
        nextPointFunc = cross.nextPointFunc;

    const { x, y } = nextPointFunc(x0, y0, Date.now());

    const crossSide = 20 * size;

    cross.angle += speed;

    const rotateAboutX = x + crossSide / 2;
    const rotateAboutY = y + crossSide / 2;

    ctx.save();
    ctx.translate(rotateAboutX, rotateAboutY);
    ctx.rotate(cross.angle);
    ctx.translate(-rotateAboutX, -rotateAboutY);

    ctx.beginPath();
    ctx.lineWidth = size * 5;
    ctx.strokeStyle = 'white';
    ctx.moveTo(x, y);
    ctx.lineTo(x + crossSide, y + crossSide);
    ctx.moveTo(x + crossSide, y);
    ctx.lineTo(x, y + crossSide);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
}

init();