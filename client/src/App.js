import './App.css';
import { useEffect, useState } from "react";
import { initSocket, disconnectSocket, sendColor, subscribeToColor, subscribeInitialColor } from "./socketService";


function App() {
  const [color,setColor]=useState('#A88179');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(color);
    sendColor(color); 
  };

  useEffect(() => {
    initSocket();

    subscribeInitialColor((data) => {
      setColor(data);
    });
    subscribeToColor((color) => {
      setColor(color);
    });
    return () => disconnectSocket();
  }, [setColor])

  
  return <div className="App">
  </div>


};

export default App;
