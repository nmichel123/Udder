import React from 'react';
import Udder from '../../components/Udder'
import './style.css';

function Home () {
    return (
        <div className = "homePage">
        <div className = "homeHeader">
            <h5>Home</h5>
        </div>
        <div className = "udderSection">
            <Udder/>
        </div>
        </div>
    );
}

export default Home