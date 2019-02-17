const articles = document.querySelector('.tabs-content');
const tabs = document.getElementsByClassName('tabs-nav')[0];
const clone = tabs.firstElementChild.cloneNode(true);
tabs.removeChild(tabs.firstElementChild);


for (let article of articles.children){

    const title = article.dataset.tabTitle;
    const icon = article.dataset.tabIcon;

    clone.firstChild.innneText = title;
    clone.firstChild.classList.add(icon);
    tabs.appendChild(clone)
}



//console.log(tabs)
//  console.log(clone)