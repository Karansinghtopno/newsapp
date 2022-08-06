import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    // console.log("hello I am a news constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // console.log("cdm ");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=bd955d504cdd4095b7489469aa308220&page=1&pageSize=15";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/15)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd955d504cdd4095b7489469aa308220&page=${
        this.state.page + 1
      }&pageSize=15`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };
  handlePreviousClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bd955d504cdd4095b7489469aa308220&page=${
      this.state.page - 1
    }&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
        <h1 className="my-3">Newsapp Top Headline</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgurl={element.urlToImage ? element.urlToImage : ""}
                  newsurl={element.url ? element.url : ""}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous{" "}
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
