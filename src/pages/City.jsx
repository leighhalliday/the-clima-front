import React from "react";
import axios from "axios";
import { Motion, spring } from "react-motion";

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
    weather: null,
    error: false,
    showForecast: false
  };

  componentDidMount() {
    this.loadWeatherData();

    setInterval(() => {
      this.setState({
        time: new Date().toISOString()
      });
    }, 1000);
  }

  loadWeatherData = async () => {
    try {
      const response = await axios.get(
        "https://abnormal-weather-api.herokuapp.com/cities/search",
        {
          params: { city: this.props.match.params.city }
        }
      );

      this.setState({
        weather: response.data
      });
    } catch (error) {
      this.setState({
        error: true
      });
    }
  };

  render() {
    if (this.state.error) {
      return <Loading>Sorry... very embarassing</Loading>;
    }

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
          toggleForecast={() => {
            this.setState({
              showForecast: !this.state.showForecast
            });
          }}
        />
        <Time time={this.state.time} />
        <Today date={this.state.weather.current.date} />

        <Motion
          defaultStyle={{ x: -200 }}
          style={{ x: spring(this.state.showForecast ? 0 : -200) }}
        >
          {style => (
            <Forecast style={{ transform: `translateX(${style.x}px)` }}>
              {this.state.weather.forecast.map(daily => (
                <Daily
                  key={daily.date}
                  date={daily.date}
                  low={daily.low}
                  high={daily.high}
                />
              ))}
            </Forecast>
          )}
        </Motion>
      </CityContainer>
    );
  }
}
