import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
 
  constructor() {
    super();
    // console.log("hello I am a news constructor from News Component");
    this.state = {
      articles:[],
      loading: false,
    };
  }
  async componentDidMount(){
    // console.log("cdm ");
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=bd955d504cdd4095b7489469aa308220";
    let data =  await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
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
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  imgurl={element.urlToImage?element.urlToImage:""}
                  newsurl={element.url?element.url:""}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
