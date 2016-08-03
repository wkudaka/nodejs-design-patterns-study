const jot = require('json-over-tcp');

const server = jot.createServer();


server.on('connection', socket => {
  socket.on('data', data =>{
    console.log('Client data', data);
  });
});

server.listen(5000, () => console.log('started'));
