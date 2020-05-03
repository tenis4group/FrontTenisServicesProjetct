import React from "react";
import "../styles/AboutUs.css";
import Court_first from "../images/aboutus/court_2015.jpg";
import Court_second from "../images/aboutus/court_second.jpg";
import Court_third from "../images/aboutus/court_third.jpg";

const AboutUs = () => {
  return (
    <div className="about_us">
      <h1 className="about_us-title">Historia klubu</h1>
      <div className="about_us-first">
        <img src={Court_first} alt="court_in_2015" />
        <p>
          Miłość do tenisa, połączona z doświadczeniem trenerskim, a także
          otwartością na ludzi i na nowe wyzwania, stały się podstawą dla
          rozpoczęcia działalności klubu Sands of Egypt w Poznaniu w 2015 roku.
        </p>
      </div>
      <div className="about_us-second">
        <p>
          Od tego czasu klub tenisowy Sands of Egypt nieustannie się rozwija –
          zarówno jeśli chodzi o nowe i atrakcyjne formy zajęć, jak i poprzez
          ciągłe podnoszenie kompetencji kadry trenerek i trenerów.
        </p>
        <img src={Court_second} alt="court_second" />
      </div>
      <div className="about_us-third">
        <img src={Court_third} alt="Court_third" />
        <p>
          I tak już od kilku lat W Sands of Egypt tworzymy zgraną społeczność
          miłośników tej eleganckiej i wyjątkowej dyscypliny sportu!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
