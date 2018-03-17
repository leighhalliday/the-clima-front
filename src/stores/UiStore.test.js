import UiStore from "./UiStore";

it("toggles forecast flag", () => {
  // setup
  UiStore.showForecast = false;

  // perform
  UiStore.toggleForecast();

  // expect
  expect(UiStore.showForecast).toBe(true);
});
