'use strict';

const wallpaper = document.querySelector('[data-wallpaper]');
const username = document.querySelector('[data-username]');
const description = document.querySelector('[data-description]');
const pic = document.querySelector('[data-pic]');
const tweets = document.querySelector('[data-tweets]');
const followers = document.querySelector('[data-followers]');
const following = document.querySelector('[data-following]');


function loadData(url) {
    return new Promise((done, fail) => {
        window[callback] = done;
        const script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
    });
}


function callback(profile) {
    wallpaper.src = profile.wallpaper;
    username.innerText = profile.username;
    description.innerText = profile.description;
    pic.src = profile.pic;
    tweets.innerText = profile.tweets;
    followers.innerText = profile.followers;
    following.innerText = profile.following;
}


loadData('https://neto-api.herokuapp.com/twitter/jsonp')
    .then(callback);