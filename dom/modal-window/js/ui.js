// Инициализация функционала модального окна
// initModalUi();

document.addEventListener('DOMContentLoaded', initModalUi);

const btn = document.querySelector('.btn'); // null?
console.log(btn);

const anotherBtn = document.getElementsByClassName('btn')[0]; // undefined?
console.log(anotherBtn);



//document.addEventListener('DOMContentLoaded', go); // из-за чего получилась задержка?

// setTimeout(go, 3000);
// function go() {
//     const btns = document.querySelectorAll('.trigger');
//     console.log(btns)
//     btnShow.addEventListener('click', initModalUi);
// }


// const btn = document.getElementsByClassName('btn-close')[0];
// console.log(btn)
// btn.addEventListener('click', initModalUi);