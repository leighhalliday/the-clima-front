import React from "react";
import PropTypes from "prop-types";
import {
  NavBar, // The wrapper for the entire nav (nav element)
  HomeLink, // A link (a tag) which will take the user home
  HomeImage, // Image of a house
  CityName // The name of the city
} from "../elements/nav";
import homeImage from "../images/home.png";

/*
props:
- city (string)
*/

export default class Nav extends React.Component {
  static propTypes = {
    city: PropTypes.string.isRequired
  };

  render() {
    return (
      <NavBar>
        <HomeLink to="/">
          <HomeImage src={homeImage} />
        </HomeLink>
        <CityName>{this.props.city}</CityName>
      </NavBar>
    );
  }
}
