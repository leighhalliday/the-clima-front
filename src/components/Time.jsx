import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  TimeBox, // A wrapper (div) for this time box
  LargeText, // Display large text in box
  SmallText // Display small text in box
} from "../elements/box";

/*
props:
- time (string)

formats:
- "h:mm" (hour and minute)
- "a" (am or pm)
*/

export default class Time extends React.Component {
  static propTypes = {
    time: PropTypes.string.isRequired
  };

  render() {
    return (
      <TimeBox>
        <LargeText>{moment(this.props.time).format("h:mm")}</LargeText>
        <SmallText>{moment(this.props.time).format("a")}</SmallText>
      </TimeBox>
    );
  }
}
