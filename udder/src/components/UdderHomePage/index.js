import React from 'react';
import './style.css'
import Blue from '../../assets/blue.jpeg'
import autosize from 'autosize';
import UdderDataService from '../../services/udder.service'
// import { response } from 'express'; //Add in later


class UdderHomePage extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.sendUdder = this.sendUdder.bind(this)

        this.state = {
            id: null,
            udder: ''
        }
    }

    onChange (e) {
        var ta = document.querySelector('textarea');
        ta.style.display = 'none';
        autosize(ta);
        ta.style.display = 'block';
        autosize.update(ta);
        this.setState({
            udder: e.target.value
        })
    };

    sendUdder() {
        var data = {
            udder: this.state.udder,
        }

        UdderDataService.create(data)
            .then(response => {
                this.setState({
                    id:response.data.id,
                    udder:response.data.udder
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newUdder() {
        this.setState({
            id:null,
            udder:""
        });
    }

    render() {
    return(
        <div className = "udder">
            <img src={Blue} alt="placeholderAvi" className = "avi"/>
            <div className = "adjustment">
            <textarea onChange = {this.onChange} className = "udderText" placeholder = " What's happening?">

            </textarea>
            </div>
            <div className = "splitter"></div>
            <div className = "buttonsGroup">
            <a href= "/udder"><button className = "udderButtonTiny" onClick = {this.sendUdder} style = {{outline: 'none'}}>Udder</button></a>

            
            </div>
        </div>
    )

    };
    
}


export default UdderHomePage