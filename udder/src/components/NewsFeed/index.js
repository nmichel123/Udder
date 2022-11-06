import React from 'react';
import './style.css';

class NewsFeed extends React.Component {
    constructor(){
        super();
        this.state = {
            news: [],
        }
    }
    render() {
        return (
            <div className='NewsBox'>

            </div>
        )
    }
}

export default NewsFeed