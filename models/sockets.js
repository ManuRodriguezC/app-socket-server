class Sockets {
  constructor( io ) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', ( socket ) => {

      // Escuchar Evento
      socket.on('mensaje-to-server', (data) => {
        this.io.emit('mensaje-from-server', data)
      })
    });
  }
}

module.exports = Sockets