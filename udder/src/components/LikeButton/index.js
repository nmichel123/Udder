import React, {Component} from 'react'
import './style.css'

class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            updated: false
        };
    }
    likeHandler = () => {
        if(!this.state.updated) {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes +1,
                    updated: true
                };
            });
        } else {
            this.setState((prevState, props) => {
                return {
                    likes: prevState.likes - 1,
                    updated: false
                };
            });
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.likeHandler}>Falalala</button>
                <p>{this.state.likes}</p>
            </div>
        )
    }
}

export default LikeButton