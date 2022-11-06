import React from 'react';
import './style.css';


class NewsFeed extends React.Component {
    constructor(){
        super();
        this.state = {
            news: [],
        }
    }

    componentDidMount () {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${MY_KEY}`)
        .then(res=> res.json())
        .then((data) => {
            this.setState({ news: data})
        })
    .catch(console.log)
    }
    render() {
        return (
            <div className='NewsBox'>
                {this.state.news.map((news) => (
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='newsTitle'>{news.title}</h5>
                            <img src={news.urlToImage} alt={news.title} />
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default NewsFeed