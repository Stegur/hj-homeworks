'use strict';

function handleTableClick(event) {
    const table = document.querySelector('table');
    const tr = event.target;

    tr.dataset.dir === undefined ? tr.dataset.dir = '1' :
        tr.dataset.dir === '1' ? tr.dataset.dir = '-1' : tr.dataset.dir = '1';

    table.dataset.sortBy = tr.dataset.propName;

    sortTable(tr.dataset.propName, tr.dataset.dir);
}