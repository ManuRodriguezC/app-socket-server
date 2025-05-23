const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = socketio(this.server, { /* Configuraciones */})    
  }

  middlewares() {
    this.app.use( express.static( path.resolve( __dirname, '../public')))
    // CORS
    this.app.use(cors());

  }

  configSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Init middlewares
    this.middlewares();
    this.configSockets();

    // Init Server
    this.server.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`)
    });
  }

}

module.exports = Server