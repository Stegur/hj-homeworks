'use strict';

document.addEventListener('click', click);

function click(event) {
    const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');
    connection.send(JSON.stringify({
        X: event.clientX,
        Y: event.clientY
    }));
    showBubbles(connection);

    // connection.addEventListener('message', event => {
    //     let message = JSON.parse(event.data);
    //     console.log('Получено сообщение:');
    //     console.log(message);
    // });

    console.log(event);
    console.log(connection);
}

