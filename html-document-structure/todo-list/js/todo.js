const todoList = document.querySelector('.todo-list');
const done = todoList.querySelector('.done');
const undone = todoList.querySelector('.undone');
const checks = todoList.getElementsByTagName('input');


for (let check of checks) {
    check.addEventListener('click', add);
}

function add(event) {
    if (event.currentTarget.checked) {
        done.appendChild(event.target.parentElement);
    } else {
        undone.appendChild(event.target.parentElement);
    }
}