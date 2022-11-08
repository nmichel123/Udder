import React from 'react';
import './style.css';


class NewsFeed extends React.Component {
    constructor(){
        super();
        this.state = {
            news: [],
        };
    }

    componentDidMount () {
<<<<<<< HEAD
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NewsAPI}`)
        .then(res => res.json())
=======
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${MY_KEY}`)
        .then(res=> res.json())
>>>>>>> parent of b708b92 (.env problem! Still unsolved....)
        .then((data) => {
            this.setState({ news: data})
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