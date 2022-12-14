import React from 'react'

 const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props
    return (
      <div className='my-3'>
        <div className="card">
        <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl?imageUrl:"https://th.bing.com/th/id/OIP.ITWd1-jeHGq_WZWVzVl4rwHaEK?pid=ImgDet&rs=1"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">by {author?author:"anonymous"} on { new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItem
