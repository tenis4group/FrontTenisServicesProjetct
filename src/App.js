import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./components/MainPage";
import Header from "./layouts/Header";
import News from "./components/News/News";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Activities from "./components/Activities";
import Opinions from "./components/Opinions";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Registration from "./components/Registration";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/news" component={News} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/activities" component={Activities} />
              <Route path="/opinions" component={Opinions} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/singup" component={Registration} />
              <Route render={() => <p>Nie ma takiej strony</p>} /> />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
