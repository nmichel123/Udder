import React from 'react';
import './style.css';

const NewsAPI = process.env.REACT_APP_NewsAPI

class NewsFeed extends React.Component {
    constructor(props){
        super(props);
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
        const {data} = this.state
        return (
            <div className='NewsBox'>
                {data && data.map((articles) => (
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