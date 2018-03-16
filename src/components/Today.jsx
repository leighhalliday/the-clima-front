import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  TodayBox, // The wrapper box (div)
  LargeText, // Large text in the box
  SmallText // Small text in the box
} from "../elements/box";

/*
props:
- date (string)

formats:
- "Do" (like 20th)
- "MMMM, YYYY" (month and year)
*/

export default class Today extends React.Component {
  static propTypes = {
    date: PropTypes.string.isRequired
  };

  render() {
    return (
      <TodayBox>
        <LargeText>{moment(this.props.date).format("Do")}</LargeText>
        <SmallText>{moment(this.props.date).format("MMMM, YYYY")}</SmallText>
      </TodayBox>
    );
  }
}
