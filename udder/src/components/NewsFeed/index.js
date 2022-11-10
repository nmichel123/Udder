import React from 'react';
import './style.css';

const NewsAPI = process.env.REACT_APP_NEWS_API

class NewsFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount () {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NewsAPI}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            this.setState({ 
                news: data.news
            });
        })
    .catch(e =>{
        console.log(e)
    })
    }

    render() {
        if (this.state.articles === null) return null;
        return (
            <div className='NewsBox'>
                {this.state.news?.map((articles) => (
                    <div className='card'>
                        <div className='cardBody'>
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