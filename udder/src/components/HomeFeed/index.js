

import React, {Component} from 'react'
import UdderDataService from '../../services/udder.service'
import './style.css'

class HomeFeed extends Component {
    constructor(props) {
        super(props);
        this.retrieveUdders = this.retrieveUdders.bind(this);
        this.state = {
            udders: [],
            currentUdder: null,
            currentIndex: 1
        };
    }

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

    refreshList() {
        this.retrieveUdders();
        this.setState({
            currentUdder: null,
            currentIndex: 1
        });
    }

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
                        </li>

                    ))}
                </ul>
        </div>
    )
    }
}

export default HomeFeed