'use strict';
const chat = document.querySelector('.chat');
const form = chat.querySelector('.message-box');
const input = chat.querySelector('.message-input');
const btn = chat.querySelector('.message-submit');

const msgs = chat.querySelector('.messages-content');
const loading  = chat.querySelector('.loading');
const msg  = chat.querySelectorAll('.message')[1];

const status = chat.querySelector('.chat-status');



const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');

connection.addEventListener('open', (event) => {
    status.innerText = status.dataset.online;
    btn.disabled = false;
    msgs.innerText = 'Пользователь появился в сети';
});

connection.addEventListener('message', event => {
    // console.log(event)
    if (event.data === '...') {
        loading.innerText = 'Пользователь печатает сообщение';
    } else {
        loading.innerText = '';
        msgs.innerText = event.data;
    }

});

connection.addEventListener('close', event => {
    status.innerText = status.dataset.offline;
    btn.disabled = true;
    msgs.innerText = 'Пользователь не в сети';
});


// console.log(msg)