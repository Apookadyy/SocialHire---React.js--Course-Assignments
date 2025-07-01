import React, { useState } from "react";
import "./App.css";

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  const randomColor = () => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(random);
  };

  const resetColor = () => {
    setBgColor("white");
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="content">
        <h1>Background Color: <span>{bgColor}</span></h1>
        <div className="buttons">
          {colors.map((color) => (
            <button
              key={color}
              className="color-btn"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
        <div className="buttons">
          <button className="action-btn" onClick={randomColor}>🎲 Random Color</button>
          <button className="action-btn reset" onClick={resetColor}>🔄 Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
