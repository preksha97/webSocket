var express = require('express');
var socket = require('socket.io');
//App setup

var app = express();
var server = app.listen(9000, function() {
    console.log(`Server started on port 9000`);
});

//static files
app.use(express.static('public'));



// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    socket.on('chat', function(data) {
        io.emit('chat', data);
    });

});