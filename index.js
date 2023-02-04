const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip').address()

app.get('/', (req, res) => {
    res.send('hai');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', function () {
        console.log('A user disconnected');
    });
});

http.listen(3000, function () {
    console.log(`listening on ${ip}:3000`);
});
