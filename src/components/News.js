import React, { Component } from "react"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import InfiniteScroll from "react-infinite-scroll-component"
import PropTypes from "prop-types"
export class News extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    let title0 = this.props.category
    let t1 = title0.charAt(0).toUpperCase() + title0.slice(1, title0.length)
    document.title = `${t1} - NewsMonk`
  }

  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.apikey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(65);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  fetchMoreData = async () => {
    this.props.setProgress(0);
    let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    this.props.setProgress(35);
    let parsedData = await data.json()
    this.props.setProgress(75);
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  render() {
    console.log(this.props.category);
    return (
      <div className="container-float my-4">
        <h1 className="text-center" style={{ color: "white", fontFamily: "cursive" }}>NewsMonk - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1, this.props.category.length)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}>
          <div className="container">
            <div className="row mx-1">
              {this.state.articles.map((element) => {
                return <div className="col-md-4 my-3 mx-auto" key={element.url}>
                  <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "}
                    imageurl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Anonymous"}
                    date={element.publishedAt} source={element.source.name}
                  />
                </div>
              })}
            </div></div></InfiniteScroll>
      </div>

    )
  }
}

export default News