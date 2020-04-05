import { Component } from "react";
import React from "react";
import Article from "../components/Article";
import "../style/News.css";

class News extends Component {
  state = {
    news: [
      {
        id: 1,
        title: "coś tam 1",
        description: "coś tam coś tam ",
      },
      {
        id: 2,
        title: "coś tam 2",
        description: "coś tam coś tam ",
      },
      {
        id: 3,
        title: "coś tam 3",
        description: "coś tam coś tam ",
      },
      {
        id: 4,
        title: "coś tam 4",
        description: "coś tam coś tam ",
      },
    ],
  };
  render() {
    return (
      <>
        <Article news={this.state.news} />
      </>
    );
  }
}

export default News;
