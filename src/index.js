const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

var http = require('http').createServer(app);
var io = require('socket.io')(http);


require('./config/database')('mongodb://localhost', 'sirius');

io.on('connection', (socket) => {
    socket.on('chat new message', (msg) => {
        io.emit('chat new message');
    });
});

http.listen(3333, () => {
    console.log('Server on Port 3333');
});
