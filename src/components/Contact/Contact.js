import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Location.css";

import Location from "./Location";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-description">
        <h1 className="contact-title">Sand of Egypt</h1>

        <div className="contact-container">
          <div className="contact-number">
            <h2>Kontakt:</h2>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="font" />
              723717213
            </p>
            <p>
              <FontAwesomeIcon icon={faAt} className="font" />
              casd@asdasd.pl
            </p>
          </div>

          <div className="contact-address">
            <h2>Adres:</h2>
            <p>Ul. Jakaś tam 4</p>
            <p>61-635 Poznań</p>
          </div>
        </div>
      </div>
      <div className="contact-location">
        <Location />
      </div>
      <div className="contact-form">
        <h1>Napisz do Nas</h1>
        <form action="submit">
          <input type="text" placeholder="email" />
          <textarea name="textarea" placeholder="Napisz coś..."></textarea>
          <button type="submit"> Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
