import React from 'react';
import './index.css';
import NavLeft from './components/NavLeft'
import SearchRight from './components/SearchRight'
import TopSectionIdentifier from './components/TopSectionIdentifier'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className = "leftPane">
          <NavLeft/>
        </div>
        <div className = "middlePane">
          <TopSectionIdentifier/>
        </div>
        <div className = "rightPane">
          <SearchRight/>
        </div>
      </div>
    </div>
  );
}

export default App;
