import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import City from "./pages/City";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:city" exact component={City} />
        </Switch>
      </BrowserRouter>
    );
  }
}
