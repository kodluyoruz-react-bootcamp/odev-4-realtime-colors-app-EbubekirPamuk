const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.end('Hi Socket.IO');
});

io.on('connection', (socket) => {
  console.log('a user joined');

  socket.on("new-color", (color) => {
    console.log(color);
    
    socket.broadcast.emit("receive-color", color);
  });

  socket.on('disconnect', () => console.log("a user left"))
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});