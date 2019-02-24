'use strict';

const colorSwatch = document.querySelector('#colorSwatch');
const sizeSwatch = document.querySelector('#sizeSwatch');
const basket = document.querySelector('#quick-cart');
const remove = document.querySelector('.remove');


// console.log(colorSwatch);


const colors = fetch('https://neto-api.herokuapp.com/cart/colors');
const sizes = fetch('https://neto-api.herokuapp.com/cart/sizes');
const cart = fetch('https://neto-api.herokuapp.com/cart');


colors.then(res => {
    if (200 <= res.status && res.status < 300) {
        return res;
    }
    throw new Error(res.statusText);
}).then(res => res.json())
    .then(data => {
        for (let item of data) {

            let available = item.isAvailable ? "available" : "soldout";
            let disabled = item.isAvailable ? "disabled " : null;

            colorSwatch.innerHTML += `<div data-value="${item.type}" class="swatch-element color ${item.type} ${available}">
      <div class="tooltip">${item.title}</div>
      <input quickbeam="color" id="swatch-1-${item.type}" type="radio" name="color" value="${item.type}" ${disabled} checked>
      <label for="swatch-1-${item.type}" style="border-color: red;">
        <span style="background-color: ${item.type};"></span>
        <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
      </label>
</div>`;
        }
    })
    .catch(error => console.log(error));


sizes.then(res => {
    if (200 <= res.status && res.status < 300) {
        return res;
    }
    throw new Error(res.statusText);
}).then(res => res.json())
    .then(data => {
        for (let item of data) {

            let available = item.isAvailable ? "available" : "soldout";
            let disabled = item.isAvailable ? "disabled " : null;

            sizeSwatch.innerHTML += `<div data-value="${item.type}" class="swatch-element plain ${item.type} ${available}">
  <input id="swatch-0-${item.type}" type="radio" name="size" value="${item.type}" ${disabled}>
  <label for="swatch-0-${item.type}">
    ${item.title}
    <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
  </label>
 </ div>`;
        }
    })
    .catch(error => console.log(error));

cart.then(res => {
    if (200 <= res.status && res.status < 300) {
        return res;
    }
    throw new Error(res.statusText);
}).then(res => res.json())
    .then(data => {
        for (let item of data) {

            basket.innerHTML = `<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${item.id}" style="opacity: 1;">
  <div class="quick-cart-product-wrap">
    <img src="${item.pic}" title="${item.title}">
    <span class="s1" style="background-color: #000; opacity: .5">$800.00</span>
    <span class="s2"></span>
  </div>
      <span class="count hide fadeUp" id="quick-cart-product-count-${item.id}">${item.quantity}</span>
      <span class="quick-cart-product-remove remove" data-id="${item.id}"></span>
 </div>
 <a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico open">
  <span>
    <strong class="quick-cart-text">Оформить заказ<br></strong>
    <span id="quick-cart-price">${item.price}</span>
  </span>
</a>`;

        }
    })
    .catch(error => console.log(error));