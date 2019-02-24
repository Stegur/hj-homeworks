'use strict';

const counter = document.querySelector('.counter');
const errors = document.querySelector('.errors');

const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');

connection.addEventListener('message', event => {
    let message = JSON.parse(event.data);
    counter.innerText = message.connections;
    errors.innerText = message.errors;
});

window.addEventListener('beforeunload', () => {
    connection.onclose = function () {
    };
    connection.close()
});

