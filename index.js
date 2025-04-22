const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();

// io.on('connection', ( socket ) => {
//   socket.on('mensaje-to-server', (data) => {
//     io.emit('mensaje-from-server', data)
//   })
// });


