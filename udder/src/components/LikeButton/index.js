import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
            <div className='grid'>
            <div className='likes'>
                <FontAwesomeIcon className='likeIcon' icon={faHeart} onClick={this.likeHandler}/>
                <p className="likeCount">{this.state.likes}</p>
            </div>
            </div>
        )
    }
}

export default LikeButton