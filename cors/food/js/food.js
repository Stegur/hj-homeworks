'use strict';

const pic = document.querySelector('[data-pic]');
const title = document.querySelector('[data-title]');
const ingredients = document.querySelector('[data-ingredients]');
const ratingValue = document.querySelector('[data-rating]');
const star = document.querySelector('[data-star]');
const votes = document.querySelector('[data-votes]');
const consumersList = document.querySelector('[data-consumers]');

function loadData(url) {
    return new Promise((done, fail) => {
        const funcName = 'callback' + Math.round(Math.random() * 1000);
        window[funcName] = done;

        const script = document.createElement('script');
        script.src = `${url}?callback=${funcName}`;
        document.body.appendChild(script);
    })
}

function parseRecipe(recipe) {

    pic.style.backgroundImage = `url(${recipe.pic})`;
    title.innerText = recipe.title;
    ingredients.innerText = recipe.ingredients.join(', ');
}

function parseRating(rating) {

    ratingValue.innerText = rating.rating.toFixed(2);
    star.style.width = `${rating.rating * 10}%`;
    votes.innerText = `(${rating.votes} оценок)`;
}

function parseConsumers(consumers) {

    for (let consumer of consumers.consumers) {
        const addConsumer = `<img src="${consumer.pic}" title="${consumer.name}">`;
        consumersList.innerHTML += addConsumer;
    }

    consumersList.innerHTML += `<span>(+${consumers.total})</span>`;
}

loadData('https://neto-api.herokuapp.com/food/42')
    .then(parseRecipe);

loadData('https://neto-api.herokuapp.com/food/42/rating')
    .then(parseRating);

loadData('https://neto-api.herokuapp.com/food/42/consumers')
    .then(parseConsumers);