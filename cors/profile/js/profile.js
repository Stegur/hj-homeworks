'use strict';

const name = document.querySelector('[data-name]');
const description = document.querySelector('[data-description]');
const pic = document.querySelector('[data-pic]');
const position = document.querySelector('[data-position]');
const technologies = document.querySelector('[data-technologies]');
// const following = document.querySelector('[data-following]');
const content = document.querySelector('.content');


function loadData(url, callback) {
    return new Promise((done, fail) => {
        window[callback] = done;
        const script = document.createElement('script');
        script.src = `${url}?callback=${callback.name}`;
        document.body.appendChild(script);
    })
}

function parseProfile(profile) {

    name.innerText = profile.name;
    description.innerText = profile.description;
    pic.src = profile.pic;
    position.innerText = profile.position;

    loadData(`https://neto-api.herokuapp.com/profile/${profile.id}/technologies`, parseStack);

}

function parseStack(stack) {

    for (let item of stack) {
        const technology = `<span class="devicons devicons-${item}"></span>`;
        technologies.innerHTML += technology;
    }

    content.style.display = 'initial';
}

loadData('https://neto-api.herokuapp.com/profile/me', parseProfile);