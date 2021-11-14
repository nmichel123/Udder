import React from 'react';
import './style.css'
import Blue from '../../assets/blue.jpeg'
import autosize from 'autosize';
import UdderDataService from '../../services/udder.service'
// import { response } from 'express';


class UdderHomePage extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.sendUdder = this.sendUdder.bind(this)

        this.state = {
            id: null,
            title: '',
            description: '',
            published: false,
            submitted: false,
        }
    }

    onChange () {
        var ta = document.querySelector('textarea');
        ta.style.display = 'none';
        autosize(ta);
        ta.style.display = 'block';
        autosize.update(ta);
    };

    sendUdder() {
        var data = {
            title: this.state.title,
        }

        UdderDataService.create(data)
            .then(response => {
                this.setState({
                    id:response.data.id,
                    title:response.data.title,
                    published: response.data.published,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
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