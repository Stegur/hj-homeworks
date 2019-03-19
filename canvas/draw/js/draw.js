'use strict';

const canvas = document.querySelector('canvas');

window.addEventListener('DOMContentLoaded', makeCanvasSize);
window.addEventListener('resize', makeCanvasSize);

canvas.addEventListener('mouseup', event => drawning = false);
canvas.addEventListener('mouseleave', event => drawning = false);
canvas.addEventListener('mousedown', event => drawning = true);
canvas.addEventListener('dblclick', event => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function makeCanvasSize(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const ctx = canvas.getContext('2d');
let hue = 0,
    saturation = 100,
    lightness = 50,
    thickness = 100,
    thicknessDir = false,
    drawning = false;

canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (drawning) {
        ctx.beginPath();
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        changeHue(event);
        changeThickness();
        ctx.lineWidth = thickness;
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.moveTo(event.clientX, event.clientY);
        ctx.lineTo(event.clientX, event.clientY);
        ctx.closePath();
        ctx.stroke();
    } else {
        return false;
    }
}

function changeHue(event) {

    if (!event.shiftKey) {
        hue < 359 ? hue++ : hue = 0;
    } else {
        hue <= 0 ? hue = 359 : hue--;
    }
}

function changeThickness() {

    if (!thicknessDir) {
        thickness--;
        if (thickness === 5) {
            thicknessDir = true;
        }
    } else {
        thickness++;
        if (thickness === 100) {
            thicknessDir = false;
        }
    }
}