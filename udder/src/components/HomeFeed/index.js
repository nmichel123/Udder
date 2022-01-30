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
            currentIndex: -1
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
            currentIndex: -1
        })
    }



    render() {
    return (
        <div className = "homeFeed">
        </div>
    )
    }
}

export default HomeFeed