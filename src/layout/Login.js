import React from "react";

const Login = () => {
  return (
    <div className="header__login">
      <label htmlFor="login">
        Login
        <input type="text" name="login" />
      </label>{" "}
      <br />
      <label htmlFor="password">
        Hasło
        <input type="password" name="password" />
      </label>
    </div>
  );
};

export default Login;
