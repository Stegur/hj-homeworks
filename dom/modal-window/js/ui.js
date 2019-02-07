// Инициализация функционала модального окна


//document.addEventListener('DOMContentLoaded', go); // из-за чего получилась задержка?

// setTimeout(go, 3000);
// function go() {
//     const btns = document.querySelectorAll('.trigger');
//     console.log(btns)
//     btnShow.addEventListener('click', initModalUi);
// }


const btn = document.getElementsByClassName('btn-close')[0];
console.log(btn)
btn.addEventListener('click', initModalUi);