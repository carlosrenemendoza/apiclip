'use strict';
const app = require('./app');
const debug = require('debug')('roldan_api_admin');
const http = require('http');
/**
 * Get port from environment and store in Express.
 */
let port = process.env.PORT || '4219';
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */  
server.listen(port);
server.on('listening', onListening);
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  console.log('Listening on : aqui',port);
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
};
