import React from "react";
import axios from "axios";
import { inject, observer } from "mobx-react";
import { Motion, spring } from "react-motion";

import Nav from "../components/Nav";
import Temperature from "../components/Temperature";
import Time from "../components/Time";
import Today from "../components/Today";
import Daily from "../components/Daily";
import Chat from "../components/Chat";

import {
  Loading, // small div to wrap text when loading data
  CityContainer, // wraps the entire content in this component
  CityBackground, // displays a background image covering whole page
  Forecast // Wrapper for when showing the Daily components
} from "../elements/city";

@inject("UiStore", "WeatherStore")
@observer
export default class City extends React.Component {
  componentDidMount() {
    this.props.WeatherStore.loadWeather(this.props.match.params.city);

    setInterval(() => {
      this.props.WeatherStore.tick();
    }, 1000);
  }

  render() {
    const { WeatherStore, UiStore } = this.props;

    if (WeatherStore.loadWeatherError) {
      return <Loading>Sorry... very embarassing</Loading>;
    }

    if (!WeatherStore.weather) {
      return <Loading>Loading...</Loading>;
    }

    return (
      <CityContainer>
        <CityBackground
          style={{
            backgroundImage: `url('${WeatherStore.weather.image_url}')`
          }}
        />

        <Nav city={WeatherStore.weather.city} />

        <Temperature
          temp={WeatherStore.weather.current.temp}
          city={WeatherStore.weather.city}
          toggleForecast={() => {
            UiStore.toggleForecast();
          }}
        />
        <Time time={WeatherStore.time} />
        <Today date={WeatherStore.weather.current.date} />

        <Motion
          defaultStyle={{ x: -200, opacity: 0 }}
          style={{
            x: spring(UiStore.showForecast ? 0 : -200),
            opacity: spring(UiStore.showForecast ? 1 : 0)
          }}
        >
          {style => (
            <Forecast
              style={{
                transform: `translateX(${style.x}px)`,
                opacity: style.opacity
              }}
            >
              {WeatherStore.weather.forecast.map(daily => (
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

        <Chat city={WeatherStore.weather.city} />
      </CityContainer>
    );
  }
}
