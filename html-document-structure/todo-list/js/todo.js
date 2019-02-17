const done = document.querySelector('.done');
const undone = document.querySelector('.undone');

// const doneList = done.getElementsByTagName('label');
const itemsList = document.querySelectorAll('label');

for (item of itemsList) {
    item.addEventListener('click', add)
}

// for (undoneItem of undoneList) {
//     undoneItem.addEventListener('click', add)
// }

function add(event) {
    const current = event.currentTarget;
    console.log(current)

    if (current.firstElementChild.checked) {
        undone.appendChild(current);
    } else {
        done.appendChild(current);
    }

}

// console.log(itemsList)
// console.log(undoneList)