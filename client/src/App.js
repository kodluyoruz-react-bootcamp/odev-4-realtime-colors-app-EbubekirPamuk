import { useState } from "react";
import './App.css';
import { useEffect } from "react";
import { io } from 'socket.io-client';

function App() {

  useEffect(() => {
    const socket = io("http://localhost:3000", {
      transports: ["websocket"],
    });
  }, [])
  

  return <div className="App">

  </div>


};

export default App;
