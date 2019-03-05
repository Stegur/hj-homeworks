'use strict';

const wsNumbers = document.querySelector('.websocket').querySelectorAll('div');

const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');

ws.addEventListener('message', show);

function show(event) {
    for (let number of wsNumbers) {
        number.classList.remove('flip-it');
        if (+event.data === +number.innerText) {
            number.classList.add('flip-it');
        }
    }
}