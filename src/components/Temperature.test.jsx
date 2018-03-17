import Temperature from "./Temperature";

it("renders component", () => {
  const wrapper = render(
    <Temperature temp={10} city="Toronto" toggleForecast={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});

it("formats temp correctly", () => {
  const wrapper = mount(
    <Temperature temp={10} city="Toronto" toggleForecast={() => {}} />
  );

  const text = wrapper.find("LargeText").text();

  expect(text).toEqual("10°c");
});

it("calls toggleForecast on click", () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <Temperature temp={10} city="Toronto" toggleForecast={spy} />
  );

  wrapper
    .find("div")
    .first()
    .simulate("click");

  expect(spy.calledOnce).toBe(true);
});
