import React from 'react';
import UdderHomePage from '../../components/UdderHomePage'
import HomeFeed from '../../components/HomeFeed'
import './style.css';

function Home () {
    return (
        <div className = "homePage">
        <div className = "homeHeader">
            <h5 id='homeH5'>Home</h5>
        </div>
        <div className = "udderSection">
            <UdderHomePage/>
        </div>
        <div className = "feedSection">
            <HomeFeed/>
        </div>
        </div>
    );
}

export default Home