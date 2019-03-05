'use strict';

const numbers = document.querySelector('.pooling').querySelectorAll('div');

setInterval(() => {

    const connection = new XMLHttpRequest();
    connection.open('GET', 'https://neto-api.herokuapp.com/comet/pooling', true);
    connection.addEventListener('load', get);
    connection.send();

    function get(event) {

        if (connection.status >= 200 || connection.status < 300) {

            for (let number of numbers) {
                number.classList.remove('flip-it');
                if (+connection.responseText === +number.innerText) {
                    number.classList.add('flip-it');
                }
            }
        }
    }
}, 5000);