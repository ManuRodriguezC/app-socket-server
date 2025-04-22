const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = socketio(this.server, { /* Configuraciones */})    
  }

  middlewares() {
    this.app.use( express.static( path.resolve( __dirname, '../public')))
  }

  configSockets() {
    // Configurar sockets
  }

  execute() {
    // Init middlewares
    this.middlewares();

    // Init Server
    this.server.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`)
    });
  }

}

module.exports = Server