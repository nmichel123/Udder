import React from 'react';
import './style.css'


class Udder extends React.Component {
    constructor(props) {
        super(props);

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange () {
    var ta = document.querySelector('textarea');
    ta.addEventListener('autosize:resized', function() {
    console.log('textarea height updated');
    });
    }

    onKeyUp () {
    var ta = document.querySelector('textarea');
    ta.addEventListener('autosize:resized', function() {
    console.log('textarea height updated');
    });
    }

    render() {
    return(
        <div className = "udder">
            <textarea onChange = {this.onChange} onKeyUp = {this.onKeyUp} className = "udderText" placeholder = " What's happening?">

            </textarea>
        </div>
    )

    }
    
}


export default Udder