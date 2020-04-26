import React from "react";
import { Route } from "react-router-dom";

const Article = (props) => {
  const news = props.news;
  const articles = news.map((article) => {
    return (
      <div className="news__article" key={article.id}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
    );
  });
  return (
    <Route
      path="/news"
      render={() => <section className="news">{articles}</section>}
    />
  );
};

export default Article;
