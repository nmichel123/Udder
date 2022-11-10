import React from 'react';
import './style.css';

const NewsAPI = process.env.REACT_APP_NEWS_API

class NewsFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            news: [],
        };
    }



    componentDidMount () {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=557f4c9f7e9641c08f0c7d7370a671f0`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ 
                isLoaded: true,
                news: data.news 
            });
            console.log(data.news)
        })
    .catch(e =>{
        console.log(e)
    })
    }
    render() {
        return (
            <div className='NewsBox'>
                {this.state.news?.map((articles) => (
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