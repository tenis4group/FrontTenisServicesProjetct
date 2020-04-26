import React, { Component } from "react";

import "../../styles/Login.css";

class Login extends Component {
  state = {};
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
                <label htmlFor="username">Nazwa Użytkownika:</label>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Hasło:</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" className="btn">
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
