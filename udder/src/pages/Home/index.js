import React from 'react';
import UdderHomePage from '../../components/UdderHomePage'
import './style.css';

function Home () {
    return (
        <div className = "homePage">
        <div className = "homeHeader">
            <h5>Home</h5>
        </div>
        <div className = "udderSection">
            <UdderHomePage/>
        </div>
        </div>
    );
}

export default Home