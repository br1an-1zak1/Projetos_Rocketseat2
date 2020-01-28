const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateCoordinates');
const socketio = require('socket.io');

let io;
const connections = [];

exports.setupWebSocket = (server) => {
  io = socketio(server);

  io.on('connection', socket => {
    console.log(socket.id);
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({ //salva as conexões que estão sendo feitas
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude)
      },
      techs: parseStringAsArray(techs),
    })
    // setTimeout(() => {
    //   socket.emit('message', 'Hello Omnistack')
    // }, 3000) //momento que o webSocket da um response para o front sem uma requisição
  })
};

//faz o filtro das conexões
exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return calculateDistance(coordinates, connection.coordinates) < 10 
      && connection.techs.some(item => techs.includes(item));
  })
};

exports.sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data)
  })
}
