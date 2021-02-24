import React from 'react';
import './style.css';

function NavLeft () {
    return (
        <div className = "navLeft">
                <div className = "navLeftItem" ><i class="fas fa-home fa-lg fa-fw"></i>   Home</div>
                <div className = "navLeftItem" ><i class="fas fa-hashtag fa-lg fa-fw"></i>  Explore</div>
                <div className = "navLeftItem" ><i class="far fa-bell fa-lg fa-fw"></i>    Notifications</div>
                <div className = "navLeftItem" ><i class="far fa-envelope fa-lg fa-fw"></i>    Messages</div>
                <div className = "navLeftItem" ><i class="far fa-bookmark fa-lg fa-fw"></i>    Bookmarks</div>
                <div className = "navLeftItem" ><i class="fas fa-list fa-lg fa-fw"></i>    Lists</div>
                <div className = "navLeftItem" ><i class="far fa-user fa-lg fa-fw"></i>    Profile</div>
                <div className = "navLeftItem" ><i class="far fa-circle fa-lg fa-fw"></i>    More</div>
                <button className = "udderButton" style = {{borderRadius: '25px'}}>Udder</button>
        </div>
    );
}

export default NavLeft 