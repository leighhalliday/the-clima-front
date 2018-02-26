import { observable, action } from "mobx";

class UiStore {
  @observable showForecast = false;
  @observable showChat = false;

  @action toggleForecast = () => {};
  @action toggleChat = () => {};
}

export default new UiStore();
