import { Component } from "react";
import React from "react";

import Article from "./Article";

import "../../styles/News.css";

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
      {
        id: 5,
        title: "coś tam 5",
        description: "coś tam coś tam ",
      },
      {
        id: 6,
        title: "coś tam 6",
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
