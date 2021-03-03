import React from 'react';
import './style.css'

const autosize = require('autosize');

class UdderHomePage extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange () {
        var ta = document.querySelector('textarea');
        ta.style.display = 'none';
        autosize(ta);
        ta.style.display = 'block';
        autosize.update(ta);
    }

    render() {
    return(
        <div className = "udder">
            <textarea onChange = {this.onChange} className = "udderText" placeholder = " What's happening?">

            </textarea>
            <a href= "/udder"><button className = "udderButtonTiny"  style = {{outline: 'none'}}>Udder</button></a>
        </div>
    )

    };
    
}


export default UdderHomePage