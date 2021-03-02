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
        ta.addEventListener('autosize:resized', function() {
        console.log('textarea height updated');
        });
    }

    render() {
    return(
        <div className = "udder">
            <textarea onChange = {this.onChange} className = "udderText" placeholder = " What's happening?">

            </textarea>
        </div>
    )

    };
    
}


export default UdderHomePage