'use strict';

const editor = window.editor;
editor.addEventListener('update', bordUpdate);

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');

function bordUpdate(event) {
    const canvas = event.canvas;
    const ctx = canvas.getContext('2d');
    const img = ctx.getImageData(0,0, canvas.width, canvas.height);
    const binary = Uint8Array.from(img.data);
    ws.send(binary.buffer);
}
