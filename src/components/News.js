import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

        constructor(){
            super();
            this.state = {
                articles:[],
                page:1,
                totalArticles:0,
                loading:false
            }
        }

        static defaultProps = {
            country:'in',
            pageSize:8,
            category:'science'
        }

        static propTypes = {
            country: PropTypes.string,
            pageSize:PropTypes.number,
            category:PropTypes.string
        }
        
        async componentDidMount(){
            let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b64a8f49e631418a9f5201f6f4031ace&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url)
            let parsedData = await data.json();
            this.setState({articles : parsedData.articles,
            totalArticles : parsedData.totalResults,
            loading:false
            });
        }
         handlePrvClick = async () =>{
            let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b64a8f49e631418a9f5201f6f4031ace&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({articles : parsedData.articles, 
                               page : this.state.page-1,
                               loading:false
            });
        }
        handleNxtClick = async () =>{
                let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b64a8f49e631418a9f5201f6f4031ace&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
                this.setState({loading:true});
                let data = await fetch(url);
                let parsedData = await data.json();
                this.setState({articles : parsedData.articles, 
                                page :this.state.page+1,
                                loading:false
                });
        }
        
  render() {
    return (
        <div className="container my-3">
            <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
            {this.state.loading && <Spinner/> }
            <div className="row">
                {!this.state.loading &&
                    this.state.articles.map((e)=>{
                        return <div className="col-md-4" key={e.url}>
                        <NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url}/>
                    </div>
                    })
                }
            </div>
            <div className="container d-flex justify-content-end">
            <button type='button' className="btn btn-dark" onClick={this.handlePrvClick} disabled={this.state.page<=1}>&larr; Previous</button>&nbsp;&nbsp;
            <button type='button' className='btn btn-dark' onClick={this.handleNxtClick} disabled={this.state.page>=Math.ceil(this.state.totalArticles/this.props.pageSize)}>Next &rarr;</button>
            </div>            
        </div>
    )
  }
}

export default News