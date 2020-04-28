import React, { Component } from "react";
import UserStore from "../../stores/UserStore";
import "../../styles/Login.css";

class Login extends Component {
  async componentDidMount() {
    try {
      let res = await fetch("./login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });

      let result = await res.json();

      if (result && result.seccess) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch("./logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });

      let result = await res.json();

      if (result && result.seccess) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    } catch (e) {
      console.log(e);
    }
  }

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
