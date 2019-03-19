'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width  = window.innerWidth * 0.9;
ctx.canvas.height = window.innerHeight * 0.9;

document.addEventListener('DOMContentLoaded', makeImg);
canvas.addEventListener('click', makeImg);


function makeImg(event) {
    makeSky();
    const starsAmount = random(200, 400);
    for (let i = starsAmount; i > 0; i--) {
        makeStar();
    }
}

function random(min, max) {
    return min + Math.round(Math.random() * (max - min));
}

function makeStar() {

    const radius = random(0, 110) / 100;

    const num = random(1, 3);
    let color;

    if (num === 1) {
        color = '#ffffff';
    } else if (num === 2) {
        color = '#ffe9c4';
    } else {
        color = '#d4fbff';
    }

    const brightness = random(80, 100) / 100;
    const x = random(0, canvas.width);
    const y = random(0, canvas.height);


    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.globalAlpha = brightness;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function makeSky() {
    ctx.beginPath();
    ctx.rect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.fill();
}
