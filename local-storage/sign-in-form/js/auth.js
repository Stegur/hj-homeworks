'use strict';

const login = document.querySelector('.sign-in-htm');
const reg = document.querySelector('.sign-up-htm');

const loginMsg = login.querySelector('.error-message');
const regMsg = reg.querySelector('.error-message');

const loginFormData = new FormData(login);
const regFormData = new FormData(reg);


const requestLogin = fetch('https://neto-api.herokuapp.com/signin', {
    body: JSON.stringify(loginFormData),
    credentials: 'same-origin',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

});

requestLogin.then(res => {
    if (200 <= res.status && res.status < 300) {
        return res.json();
    }
})
    .then(data => {
        if (data.error) {
            loginMsg.innerText = data.message;
        } else {
            loginMsg.innerText = `Пользователь ${data.name} успешно авторизован`;
        }
    })
    .catch(error => loginMsg.innerText = error.message);



const requestSingUp = fetch('https://neto-api.herokuapp.com/signup', {
    body: JSON.stringify(regFormData),
    credentials: 'same-origin',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

});

requestSingUp.then(res => {
    if (200 <= res.status && res.status < 300) {
        return res.json();
    }
})
    .then(data => {
        if (data.error) {
            regMsg.innerText = data.message;
        } else {
            regMsg.innerText = `Пользователь ${data.name} успешно зарегистрирован`;
        }
    })
    .catch(error => regMsg.innerText = error.message);
