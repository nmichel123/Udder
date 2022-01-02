import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import NavLeft from './components/NavLeft'
import SearchRight from './components/SearchRight'
import Home from './pages/Home'

function App  () {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="container">
        <div className = "leftPane">
          <NavLeft/>
        </div>
        <div className = "middlePane">
          <Home/>
        </div>
        <div className = "rightPane">
          <SearchRight/>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
  }

export default App;
