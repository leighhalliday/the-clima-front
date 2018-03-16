import React from "react";
import PropTypes from "prop-types";
import {
  TemperatureBox, // wraps the content inside the Temperature component
  LargeText, // The top larger text inside this box
  SmallText // The bottom smaller text inside this box
} from "../elements/box";

/* props:
- temp (number)
- city (string)
*/

export default class Temperature extends React.Component {
  static propTypes = {
    temp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    toggleForecast: PropTypes.func.isRequired
  };

  render() {
    return (
      <TemperatureBox
        onClick={e => {
          e.preventDefault();
          this.props.toggleForecast();
        }}
      >
        <LargeText>{this.props.temp}&deg;c</LargeText>
        <SmallText>{this.props.city}</SmallText>
      </TemperatureBox>
    );
  }
}
