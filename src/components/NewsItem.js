import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date,source } = this.props;
    return (
      <div className='row'>
        <div className="card mx-auto" style={{ width: " 18rem", height: "650px" }}>
          <img src={!imageurl ? "https://images.moneycontrol.com/static-mcnews/2022/07/LIVE-NEWS-BLOG-1-770x433.jpg" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,title.indexOf("-"))}<span className="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger">
              {source.slice(0,source.indexOf("-"))}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-info">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem