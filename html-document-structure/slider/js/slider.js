const list = document.getElementsByClassName('slides')[0];


const nav = document.getElementsByClassName('slider-nav')[0];
const btns = nav.getElementsByTagName('a');


list.firstElementChild.classList.add('slide-current');
nav.querySelector('[data-action="prev"]').classList.add('disabled');
nav.querySelector('[data-action="first"]').classList.add('disabled');

for (let btn of btns) {
    btn.addEventListener('click', click);
}

function click(event) {
    event.preventDefault();

    const action = event.currentTarget.dataset.action;

    let currentSlide = list.querySelector('.slide-current');

    if (currentSlide !== currentSlide.parentElement.lastElementChild && action === 'next') {
        currentSlide.classList.remove('slide-current');
        currentSlide = currentSlide.nextElementSibling;
        currentSlide.classList.add('slide-current');
    } else if (currentSlide !== currentSlide.parentElement.firstElementChild && action === 'prev') {
        currentSlide.classList.remove('slide-current');
        currentSlide = currentSlide.previousElementSibling;
        currentSlide.classList.add('slide-current');
    } else if (action === 'first') {
        currentSlide.classList.remove('slide-current');
        currentSlide = list.firstElementChild;
        currentSlide.classList.add('slide-current');
    } else if (action === 'last') {
        currentSlide.classList.remove('slide-current');
        currentSlide = list.lastElementChild;
        currentSlide.classList.add('slide-current');
    }

    for (let btn of btns) {
        btn.classList.remove('disabled');

        if (currentSlide === currentSlide.parentElement.firstElementChild) {
            nav.querySelector('[data-action="prev"]').classList.add('disabled');
            nav.querySelector('[data-action="first"]').classList.add('disabled');
        } else if (currentSlide === currentSlide.parentElement.lastElementChild) {
            nav.querySelector('[data-action="next"]').classList.add('disabled');
            nav.querySelector('[data-action="last"]').classList.add('disabled');
        }
    }

}


