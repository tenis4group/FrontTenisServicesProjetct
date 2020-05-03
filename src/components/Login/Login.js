import React, { Component } from "react";
import "../../styles/Login.css";

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-header">
          <div className="content">
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Nazwa Użytkownika:</label>
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Hasło:</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" className="login-btn">
                Zaloguj Się
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
