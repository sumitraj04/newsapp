import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card">
        <img src={imageUrl?imageUrl:"https://th.bing.com/th/id/OIP.ITWd1-jeHGq_WZWVzVl4rwHaEK?pid=ImgDet&rs=1"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem