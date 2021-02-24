import React from 'react';
import './style.css';

function NavLeft () {
    return (
        <div className = "navLeft">
                <div className = "navLeftItem" ><i class="fas fa-home fa-fw"></i>Home</div>
                <div className = "navLeftItem" >Explore</div>
                <div className = "navLeftItem" >Notifications</div>
                <div className = "navLeftItem" >Messages</div>
                <div className = "navLeftItem" >Bookmarks</div>
                <div className = "navLeftItem" >Lists</div>
                <div className = "navLeftItem" >Profile</div>
                <div className = "navLeftItem" >More</div>
                <div className = "udderButton" >Udder</div>
        </div>
    );
}

export default NavLeft 