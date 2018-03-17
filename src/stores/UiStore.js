import { observable, action } from "mobx";

class UiStore {
  @observable showForecast = false;
  @observable showChat = false;

  @action
  toggleForecast = () => {
    this.showForecast = !this.showForecast;
  };

  @action
  toggleChat = () => {
    this.showChat = !this.showChat;
  };
}

export default new UiStore();
