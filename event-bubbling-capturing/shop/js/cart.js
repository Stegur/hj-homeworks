'use strict';

const itemsList = document.getElementsByClassName('items-list')[0];
const more = document.querySelector('.show-more');

document.addEventListener('DOMContentLoaded', some);

function some() {
    for (let item of itemsList.children) {
        let btn = item.querySelector('.add-to-cart');
        btn.addEventListener('click', prepareForCart);
    }

}

function prepareForCart(event) {

    const title = event.target.dataset.title;
    const price  = event.target.dataset.price;

    addToCart({title, price});

}

more.addEventListener('click', update);

function update() {
    some();
}


