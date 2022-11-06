import React from 'react';
import './index.css';
import NavLeft from './components/NavLeft'
import SearchRight from './components/SearchRight'
import Home from './pages/Home'
import WhatsHappeningPanel from './components/WhatsHappeningPanel';
import NewsFeed from './components/NewsFeed';

function App  () {
  return (
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
          <WhatsHappeningPanel/>
          <NewsFeed/>
        </div>
      </div>
    </div>
  );
  }

export default App;
