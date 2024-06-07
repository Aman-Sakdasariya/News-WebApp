import React, { Component } from 'react';
import NewsImg from './News.jpg'

export class NewsItem extends Component {
    render() {
        let { title, description, imgurl, url } = this.props;
        return (
            <div className='my-3'>
                <div className="itemCard card">
                    <div className='imgCont'>
                            <img src={imgurl?imgurl:NewsImg} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title || 'No Title Available'}</h5>
                        <p className="card-text">{description || 'No Description Available'}</p>
                        <a href={url} target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
