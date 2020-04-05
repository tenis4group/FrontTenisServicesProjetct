import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../style/App.css";
import Header from "./Header";
import Baner from "./Baner";
import News from "./News";
import Gallery from "./Gallery";
import AboutUs from "./AboutUs";
import Activities from "./Activities";
import Opinions from "./Opinions";
import Contact from "./Contact";
import Footer from "./Footer";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact component={Baner} />
            <Route path="/news" component={News} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/activities" component={Activities} />
            <Route path="/opinions" component={Opinions} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route render={() => <p>Nie ma takiej strony</p>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
