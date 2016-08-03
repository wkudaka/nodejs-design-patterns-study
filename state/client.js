const createFailsafeSocket = require('./fail_safe_socket');
const failsafeSocket = createFailsafeSocket({port:5000});

process.on('uncaughtException', (reason) => {

  if(reason.code === 'ECONNREFUSED'){
    setTimeout(() =>{
      failsafeSocket.changeState('offline');
    },1000);
  }

});
setInterval(() => {
  failsafeSocket.send(process.memoryUsage());
}, 1000);
