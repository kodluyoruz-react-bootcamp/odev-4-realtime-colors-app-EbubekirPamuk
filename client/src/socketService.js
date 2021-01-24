import { io } from 'socket.io-client';

let socket;

export const initSocket = () => {
    socket = io('https://localhost:3000', {
        transports: ['websocket']
    })
    console.log("connecting...")
    socket.on("connect", () => console.log("connected"));
}

export const disconnectSocket = () => {
	console.log("disconnecting...");
	if (socket) socket.disconnect();
};

export const emitColor = (color) => {
    if (socket) socket.emit("new-color", color);    
};

export const subscribeToColor = (sc) => {
    if(!socket) return true;

    socket.on('receive-color',(color) => {
        console.log("color received:",color);
        sc(color)
    })
}

export const subscribeInitialColor = (sc) => {
    if (!socket) return true;
  
    socket.on("color-received", (data) => {
      console.log("color received successfully from all users", data);
      sc(data);
    });
  };