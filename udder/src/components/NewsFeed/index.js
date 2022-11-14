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
        fetch(`https://newsapi.org/v2/top-headlines?pageSize=7&country=us&apiKey=${NewsAPI}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            this.setState({ 
                news: data.articles
            });
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
                        <div className='cardBody'>
                        <a className='imageLink' href={articles.url}>
                            <p className='newsTitle'>{articles.title}</p>
                            <img src={articles.urlToImage} alt={articles.title} />
                        </a>
                        </div>
                    </div>
                ))} 
            </div>
        );
    }
}

export default NewsFeed