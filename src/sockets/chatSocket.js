const messages = {};  // Mensajes por sala

const addMessage = (data) => {
  
  if (messages[data.room].length >=30) {
    messages[data.room].shift();
  }else{
    messages[data.room].push(data);  // Guardar el mensaje en la sala correspondiente
  }  

};
 

export const chatSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('Conectado:', socket.id); 

    socket.on('joinRoom', (room) => {
      socket.join(room)
      console.log(`${socket.id} se ha unido a la sala: ${room}`);

      socket.emit('previousMessages', messages[room] || []);
      socket.to(room).emit('message', `Usuario ${socket.id} se ha unido a la sala`);

    })

    socket.on('chatMessage', (data) => {
      // console.log(data);

      if (!messages[data.room]) {
        messages[data.room] = [];  // Si no existe la sala, se crea un array para los mensajes
      }    //   // Guardar el mensaje en el array de la sala
      addMessage(data);

      console.log(messages);

    //   // Enviar el mensaje solo a los usuarios de la sala
      io.to(data.room).emit('chatMessage', data); 
      console.log(`Mensaje en la sala ${data.room}:`, data.MSG);
    });


    socket.on('disconnect', () => {
      console.log('Usuario desconectado:', socket.id);
    });
  });
};

