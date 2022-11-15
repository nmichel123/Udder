import React, {Component} from 'react'
import UdderDataService from '../../services/udder.service'
import './style.css'
import LikeButton from '../LikeButton';

class HomeFeed extends Component {
    
    //Constructor to manage state of the home feed
    
    constructor(props) {
        super(props);
        this.retrieveUdders = this.retrieveUdders.bind(this);
        this.state = {
            udders: [],
            currentUdder: null,
            currentIndex: 1
        };
    }

    //Function to retrieve data on mount & select udder data

    componentDidMount() {
        this.retrieveUdders(); 
    }

    retrieveUdders() {
        UdderDataService.getAll()
            .then(response => {
                this.setState({
                    udders:response.data
                });
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            })
    }

    //Function to refresh udder list once a new one is added

    refreshList() {
        this.retrieveUdders();
        this.setState({
            currentUdder: null,
            currentIndex: 1
        });
    }

    //Function to set udder as active once they are able to be interacted with

    setActiveUdder(udder, index) {
        this.setState({
            currentUdder: udder,
            currentIndex: index
        });
    }



    render() {
        const { udders } = this.state;

    return (
        <div className = "homeFeed">

                <ul className='uddersList'>
                    { udders && udders.reverse().map((udder) => (

                        <li className={'uddersListItem'}>
                        {udder.udder} 
                        <LikeButton/>
                        </li>

                    ))}
                </ul>
        </div>
    )
    }
}

export default HomeFeed