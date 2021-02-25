import React from 'react';
import './style.css';

class NavLeft extends React.Component {
    state = {
        title: ""
    };

    handleTitle = () => {
        this.setState({title: this.state.title});
    };
    render () {
        return (
            <div className = "navLeft">
            <div className = "navLeftItem"><i class="fas fa-paw fa-lg fa-fw"></i></div>
            <a href= "/home"><div className = "navLeftItem" ><i class="fas fa-home fa-lg fa-fw"></i>    Home</div></a>
            <a href= "/explore"><div className = "navLeftItem" ><i class="fas fa-hashtag fa-lg fa-fw"></i>    Explore</div></a>
            <a href= "/notifications"><div className = "navLeftItem" ><i class="far fa-bell fa-lg fa-fw"></i>    Notifications</div></a>
            <a href= "/messages"><div className = "navLeftItem" ><i class="far fa-envelope fa-lg fa-fw"></i>    Messages</div></a>
            <a href= "/bookmarks"><div className = "navLeftItem" ><i class="far fa-bookmark fa-lg fa-fw"></i>    Bookmarks</div></a>
            <a href= "/lists"><div className = "navLeftItem" ><i class="fas fa-list fa-lg fa-fw"></i>    Lists</div></a>
            <a href= "/profile"><div className = "navLeftItem" ><i class="far fa-user fa-lg fa-fw"></i>    Profile</div></a>
            <a href= "/more"><div className = "navLeftItem" ><i class="far fa-circle fa-lg fa-fw"></i>    More</div></a>
            <a href= "/udder"><button className = "udderButton"  style = {{outline: 'none'}}>Udder</button></a>
            </div>
        )
      }  
    }

export default NavLeft 