import React from "react";

import "../styles/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="mainPage-description">
        <p>Rozwiń swoją tenisową</p>
        <p>pasję!</p>
      </div>
      <a className="mainPage-button" href="./activities">
        Zacznij teraz
      </a>
    </div>
  );
};

export default MainPage;
