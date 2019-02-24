'use strict';
const counter = document.querySelector('#counter');
const btns = document.getElementsByTagName('button');

counter.innerHTML = localStorage.counter ? localStorage.counter : 0;

for (let btn of btns) {
    btn.addEventListener('click', count)
}

function count(event) {

    if (event.currentTarget.id === 'increment') {
        counter.innerHTML = +counter.innerHTML + 1;
        localStorage.counter = +counter.innerHTML;
    } else if (event.currentTarget.id === 'decrement') {
        if (+counter.innerHTML !== 0) {
            counter.innerHTML = +counter.innerHTML - 1;
            localStorage.counter = +counter.innerHTML;
        }
    } else {
        counter.innerHTML = 0;
        localStorage.counter = +counter.innerHTML;
    }

}

