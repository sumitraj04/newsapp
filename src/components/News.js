import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

        const [articles, setArticles] = useState([])
        const [page, setPage] = useState(1)
        const [totalArticles, setTotalArticles] = useState(0)
        const [loading, setLoading] = useState(true)
        
        useEffect(() => {
            document.title = `NewsMoneky-${props.category[0].toUpperCase().concat(props.category.slice(1))}`;
            updateNews();
        }, [])
        

        //  handlePrvClick = async () =>{
        //     setState({page :page-1});
        //     updateNews();
        // }

        // handleNxtClick = async () =>{
        //     setState({page :page+1});
        //     updateNews();
        // }

        const updateNews = async () =>{
            props.setProgress(10);
            const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            props.setProgress(30);
            let parsedData = await data.json();
            props.setProgress(70);
            setArticles(parsedData.articles);
            setTotalArticles(parsedData.totalResults);
            setLoading(false);
            props.setProgress(100);
        }
        
        const fetchMoreData = async () => {
            const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
            setPage(page+1);
            let data = await fetch(url)
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles));
            setTotalArticles(parsedData.totalResults);
          };
        
    return (
        // < className="container my-3">
        <>
            <h2 className='text-center' style={{marginTop:'70px'}}>NewsMonkey - Top {props.category[0].toUpperCase().concat(props.category.slice(1))} Headlines</h2>
            {loading && <Spinner/> }          
            <InfiniteScroll
                dataLength={articles.length }
                next={fetchMoreData}
                hasMore={articles.length < totalArticles}
                loader={<Spinner/>}>
            
            <div className="container">
            <div className="row">
            {/* !loading && */}
                {
                    articles.map((e)=>{
                        return <div className="col-md-4" key={e.url.concat(Math.random())}>
                        <NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name}/>
                    </div>
                    })
                }
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-end">
            <button type='button' className="btn btn-dark" onClick={handlePrvClick} disabled={page<=1}>&larr; Previous</button>&nbsp;&nbsp;
            <button type='button' className='btn btn-dark' onClick={handleNxtClick} disabled={page>=Math.ceil(totalArticles/props.pageSize)}>Next &rarr;</button>
            </div>             */}
        </>
    )
}

export default News

News.defaultProps = {
    country:'in',
    pageSize:8,
    category:'science'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}