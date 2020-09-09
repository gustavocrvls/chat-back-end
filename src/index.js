const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const dotenv = require('dotenv');
const PORT = process.env.PORT || 3001;
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

var http = require('http').createServer(app);
var io = require('socket.io')(http);


require('./config/database')(process.env.DB_URI, process.env.DB_NAME);

io.on('connection', (socket) => {
    socket.on('chat new message', (msg) => {
        io.emit('chat new message');
    });
});

http.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`);
});
