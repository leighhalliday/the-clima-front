import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  DailyBox, // The wrapping element for each days forecast
  Day, // A (span) tag showing which day forecast is fore
  HighLow, // The high of this day
  Small // The low of this day
} from "../elements/daily";

/* 
props:
- date (string)
- low (number)
- high (number)

format:
- ddd
*/

export default () => "Daily";
