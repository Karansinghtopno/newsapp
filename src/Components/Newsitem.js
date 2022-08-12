import React, { Component } from "react";
export class Newsitem extends Component {
    
  render() {
    const { title, description,imgurl,newsurl } = this.props; //deconstrtucting 
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imgurl? "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a  rel = "noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
