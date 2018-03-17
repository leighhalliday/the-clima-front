import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import City from "./pages/City";
import Home from "./pages/Home";

import UiStore from "./stores/UiStore";
import WeatherStore from "./stores/WeatherStore";

export default class App extends Component {
  render() {
    return (
      <Provider UiStore={UiStore} WeatherStore={WeatherStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:city" exact component={City} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
