import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import NavLeft from './components/NavLeft'
import SearchRight from './components/SearchRight'
import Home from './pages/Home'

function App  () {
  return (
    <div className="App">
      <div className="container">
        <div className = "leftPane">
          <NavLeft/>
        </div>
        <div className = "middlePane">
          <Home/>
          {/* <Switch>
            <Route exact path = "/" component={}/>
          </Switch> */}
        </div>
        <div className = "rightPane">
          <SearchRight/>
        </div>
      </div>
    </div>
  );
  }

export default App;
