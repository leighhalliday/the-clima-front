import React from "react";

import data from "../sample-data";

import Nav from "../components/Nav";
import Temperature from "../components/Temperature";
import Time from "../components/Time";
import Today from "../components/Today";
import Daily from "../components/Daily";
// import Chat from "../components/Chat";

import {
  Loading, // small div to wrap text when loading data
  CityContainer, // wraps the entire content in this component
  CityBackground, // displays a background image covering whole page
  Forecast // Wrapper for when showing the Daily components
} from "../elements/city";

export default class City extends React.Component {
  state = {
    time: new Date().toISOString(),
    weather: null
  };

  componentDidMount() {
    this.setState({
      weather: data
    });

    setInterval(() => {
      this.setState({
        time: new Date().toISOString()
      });
    }, 1000);
  }

  render() {
    if (!this.state.weather) {
      return <Loading>Loading...</Loading>;
    }

    return (
      <CityContainer>
        <CityBackground
          style={{ backgroundImage: `url('${this.state.weather.image_url}')` }}
        />

        <Nav city={this.state.weather.city} />

        <Temperature
          temp={this.state.weather.current.temp}
          city={this.state.weather.city}
        />
        <Time time={this.state.time} />
        <Today date={this.state.weather.current.date} />

        <Forecast>
          {this.state.weather.forecast.map(daily => (
            <Daily
              key={daily.date}
              date={daily.date}
              low={daily.low}
              high={daily.high}
            />
          ))}
        </Forecast>
      </CityContainer>
    );
  }
}
