import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        };
    }

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f96037738fc54b819ba64924860d1f62&page=1&pageSize=18';
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles });
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f96037738fc54b819ba64924860d1f62&page=${this.state.page-1}&pageSize=18`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ 
            page:this.state.page-1,
            articles: parseData.articles });
    }
    handleNextClishk = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f96037738fc54b819ba64924860d1f62&page=${this.state.page+1}&pageSize=18`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ 
            page:this.state.page+1,
            articles: parseData.articles });
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsBaba - Top Headlines...</h2>
                <div className="row">
                    {this.state.articles ? this.state.articles.map((element) => {
                        return (
                            <div key={element.title} className="col-md-4">
                                <NewsItem
                                    title={element.title}
                                    description={element.description}
                                    imgurl={element.urlToImage}
                                    url={element.url}
                                />
                            </div>
                        );
                    }) : <h1>"We are Sorry!"</h1>}
                    <div className="container d-flex justify-content-around">
                        <button disabled={this.state.page <= 1} type="button" class="btn btn-primary" onClick={this.handlePrevClick}>&larr;Previous</button>
                        <button type="button" class="btn btn-primary" onClick={this.handleNextClishk}>Next&rarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
