import React, { useState } from 'react';
import './App.css';

function App() {
  const [color1, setColor1] = useState('#ff8bff');
  const [color2, setColor2] = useState('#ff0000');

  const setGradient = () => {
    return `linear-gradient(to right, ${color1}, ${color2})`;
  };

  return (
    <div className="App" style={{ background: setGradient() }}>
      <h3>Current CSS Background</h3>
      <div>
        <label htmlFor="color1">Color 1:</label>
        <input
          type="color"
          id="color1"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color2">Color 2:</label>
        <input
          type="color"
          id="color2"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        />
      </div>
      <h3>{setGradient()}</h3>
    </div>
  );
}

export default App;