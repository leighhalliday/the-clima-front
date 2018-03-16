import { observable, action } from "mobx";
import axios from "axios";

class WeatherStore {
  @observable time = new Date().toISOString();
  @observable weather = null;
  @observable loadWeatherError = false;

  @action tick = () => {};
  @action fetchWeather = async city => {};
}

export default new WeatherStore();
