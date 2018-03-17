import { observable, action } from "mobx";
import axios from "axios";

class WeatherStore {
  @observable time = new Date().toISOString();
  @observable weather = null;
  @observable loadWeatherError = false;

  @action
  tick = () => {
    this.time = new Date().toISOString();
  };

  @action
  loadWeather = async city => {
    try {
      const response = await axios.get(
        "https://abnormal-weather-api.herokuapp.com/cities/search",
        {
          params: { city }
        }
      );

      this.weather = response.data;
    } catch (error) {
      this.loadWeatherError = true;
    }
  };
}

export default new WeatherStore();
