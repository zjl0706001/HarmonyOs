#!/usr/bin/env node

const app = require('../app');
const debug = require('debug')('expressapp:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port,()=>console.log(`sever run on http://localhost:${port}`));
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' 需要提升权限');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' 已被占用');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('正在监听 ' + bind);
}
