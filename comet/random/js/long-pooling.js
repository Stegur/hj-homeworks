'use strict';

const longNumbers = document.querySelector('.long-pooling').querySelectorAll('div');

const longConnection = new XMLHttpRequest();

function getData(url) {
    longConnection.addEventListener('readystatechange', function () {
        if (longConnection.readyState !== 4) {
            return
        }

        if (longConnection.status >= 200 || longConnection.status < 300) {

            for (let number of longNumbers) {
                number.classList.remove('flip-it');
                if (+longConnection.responseText === +number.innerText) {
                    number.classList.add('flip-it');
                }
            }
        }

        getData(url);
    });
    longConnection.open('GET', url, true);
    longConnection.send();

}

getData('https://neto-api.herokuapp.com/comet/long-pooling');