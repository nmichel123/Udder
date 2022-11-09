import React from 'react';
import './style.css';
import $ from 'jquery';

const NewsAPI = process.env.REACT_APP_NEWS_API

class NewsFeed extends React.Component {
    constructor(){
        super();
        this.state = {
            news: [],
        };
    }

    componentDidMount () {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NewsAPI}`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ news: data })
        })
    .catch(console.log)
    }
    render() {
        return (
            <div className='NewsBox'>
                {this.props.data.map((articles) => (
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='newsTitle'>{articles.title}</h5>
                            <img src={articles.urlToImage} alt={articles.title} />
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default NewsFeed

// Is fixed?