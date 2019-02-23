'use strict';

const itemsList = document.getElementsByClassName('items-list')[0];

itemsList.addEventListener('click', prepareForCart);

function prepareForCart(event) {

    event.preventDefault();
    if (event.target.classList.contains('add-to-cart')) {

        const title = event.target.dataset.title;
        const price = event.target.dataset.price;

        addToCart({
            title,
            price
        });
    }


}

