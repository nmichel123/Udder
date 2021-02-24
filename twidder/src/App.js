import React from 'react';
import './index.css';
import NavLeft from './components/NavLeft'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className = "leftPane">
          <h1>Left Pane</h1>
          <NavLeft/>
        </div>
        <div className = "middlePane">
          <h1>Mids Pane</h1>
        </div>
        <div className = "rightPane">
          <h1>Right Pane</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
