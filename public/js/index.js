var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Yup, that works me.'
    });
});

socket.on('disconnect', function() {
    console.log('Disonnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
    // socket.emit('createMessage', {
    //     from: 'Andrew',
    //     text: 'Yup, that works me.'
    // });
});
