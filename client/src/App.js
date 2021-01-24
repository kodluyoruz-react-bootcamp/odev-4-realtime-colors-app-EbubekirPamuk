import './App.css';
import { useEffect, useState } from "react";
import { initSocket, disconnectSocket, sendColor, subscribeToColor, subscribeInitialColor } from "./socketService";


function App() {
  const [color, setColor] = useState('#A88179');

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return <div style={{ backgroundColor: `${color}` }} className="App">
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setColor(e.target.value)}
        type="color"
        value={color}
        name="color"
      />
      <hr />
      <button>Choose Color</button>
      <p>Your hex color code is : {color}</p>
    </form>
  </div>



}

export default App;
