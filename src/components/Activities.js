import React from "react";
import "../styles/Activities.css";

import activities1 from "../images/activities/dzieci.jpg";
import activities2 from "../images/activities/przedszkolaki.jpg";
import activities3 from "../images/activities/instruktor.jpg";
import activities4 from "../images/activities/seniorzy.jpg";

const Activities = () => {
  return (
    <div className="activities">
      <div>
        <img src={activities1} alt="zajecia1" />
      </div>
      <div>
        <img src={activities2} alt="zajecia2" />
      </div>
      <div>
        <img src={activities3} alt="zajecia3" />
      </div>
      <div>
        <img src={activities4} alt="zajecia4" />
      </div>
    </div>
  );
};

export default Activities;
