const tabs = document.querySelector('#tabs');
const menu = tabs.querySelector('.tabs-nav');
const menuLi = tabs.querySelector('li');

const content = tabs.querySelector('.tabs-content');
const articles = content.querySelectorAll('article');


for (let article of articles) {
    const tabsMenu = menu.appendChild(menuLi.cloneNode(true));
    tabsMenu.children[0].innerText = article.dataset.tabTitle;
    tabsMenu.children[0].classList.add(article.dataset.tabIcon);
    article.classList.add('hidden');
}

menuLi.parentElement.removeChild(menuLi.parentElement.children[0]);
articles[0].classList.remove('hidden');
articles[0].classList.add('ui-tabs-active');


Array.from(menu.children).forEach((el, i) => {
    el.addEventListener('click', (event) => {
        for (let item of menu.children) {
            item.classList.remove('ui-tabs-active');
        }
        event.currentTarget.classList.add('ui-tabs-active');
        for (let article of articles) {
            article.classList.add('hidden');
        }
        articles[i].classList.remove('hidden');
    })
});