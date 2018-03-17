import { observable, action } from "mobx";

class UiStore {
  @observable showForecast = false;
  @observable showChat = false;

  @action
  toggleForecast = () => {
    this.showForecast = !this.showForecast;
  };
  @action toggleChat = () => {};
}

export default new UiStore();
