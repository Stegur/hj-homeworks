'use strict';

const longNumbers = document.querySelector('.long-pooling').querySelectorAll('div');

const longConnection = new XMLHttpRequest();
longConnection.open('GET', 'https://neto-api.herokuapp.com/comet/long-pooling', true);
longConnection.addEventListener('load', get);
longConnection.send();

function get(event) {

    if (longConnection.status >= 200 || longConnection.status < 300) {

        for (let number of longNumbers) {
            number.classList.remove('flip-it');
            if (+longConnection.responseText === +number.innerText) {
                number.classList.add('flip-it');
            }
        }
    }
}