import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: null,
            page: 1,
            nextSize: 0,
            loading: false,
            api:'f96037738fc54b819ba64924860d1f62',
            notWorking:false
        };
    }
    async componentDidMount() {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.state.api}&page=1&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                nextSize: parseData.totalResults / this.props.pageSize,
                articles: parseData.articles,
                loading: false
            });
        
        if(this.state.articles==null) {
            await this.setState({api:'2c62ab9ae5024298a933d0dd6f69848f'})
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.state.api}&page=1&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                nextSize: parseData.totalResults / this.props.pageSize,
                articles: parseData.articles,
                loading: false
            });
        }
        if(this.state.articles==null) {
            await this.setState({api:'f6bc02dc8ed148b49bb3089c9800f5c6'})
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.state.api}&page=1&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                nextSize: parseData.totalResults / this.props.pageSize,
                articles: parseData.articles,
                loading: false,
                notWorking:true
            });
        }
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.state.api}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            nextSize: parseData.totalResults$ / this.props.pageSize,
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        });
    }
    handleNextClishk = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.state.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            nextSize: parseData.totalResults / this.props.pageSize,
            page: this.state.page + 1,
            articles: parseData.articles,
            loading: false
        });
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>NewsBaba - Top Headlines...</h2>
                {this.state.loading && this.state.articles && <Loading />}
                <div className="row">
                    {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
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
                    })}
                    {!this.state.articles && this.state.notWorking && <> <Loading />
                        <h1 className='text-center'>"We are Sorry!"</h1>
                    </>}
                    {!this.state.loading && this.state.articles && <div className="container d-flex justify-content-around">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr;Previous</button>
                        <button disabled={this.state.page >= this.state.nextSize} type="button" className="btn btn-primary" onClick={this.handleNextClishk}>Next&rarr;</button>
                    </div>}
                </div>
            </div>
        );
    }
}

export default News;