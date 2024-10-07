

let messages = [];

export const chatSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('Conectado:', socket.id); 

    socket.emit('previousMessages', messages);


    socket.on('chatMessage', (msg) => {
      messages.push(msg);
      io.emit('chatMessage', msg); 
      console.log(messages);
    });

    socket.on('disconnect', () => {
      console.log('Usuario desconectado:', socket.id);
    });
  });
};
// import jwt from 'jsonwebtoken';

// export const chatSocket = (io) => {
//   io.use((socket, next) => {
    
//     const token = socket.handshake.auth.token;
//     console.log("Token recibido:", token);
//     if (!token) {
//       return next(new Error('Authentication error'));
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return next(new Error('Authentication error'));
//       }
//       socket.user = decoded;
//       next();
//     });
//   });

//   io.on('connection', (socket) => {
//     console.log('User connected:', socket.user.username);

//     // Recibir mensajes del cliente
//     socket.on('chatMessage', (msg) => {
//       io.emit('chatMessage', { user: socket.user.username, message: msg });
//     });

//     // Desconectar al usuario
//     socket.on('disconnect', () => {
//       console.log('User disconnected:', socket.user.username);
//     });
//   });
// };
