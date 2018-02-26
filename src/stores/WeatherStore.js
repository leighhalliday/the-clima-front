import { observable, action } from "mobx";
import axios from "axios";

class WeatherStore {
  @observable nearby = [];
  @observable address = "";
  @observable time = new Date().toISOString();
  @observable weather = null;
  @observable loadWeatherError = false;

  @action tick = () => {};
  @action loadNearby = async () => {};
  @action loadLocalNearby = () => {};
  @action fetchWeather = async city => {};
  getPosition = (options = {}) => {};
}

export default new WeatherStore();
