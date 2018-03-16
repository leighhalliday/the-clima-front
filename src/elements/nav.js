import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background-color: #000;
`;

const HomeLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: #ffff00;
  display: inline-block;
  padding: 15px;
  background: #000;
  width: 72px;
  height: 72px;
`;

const HomeImage = styled.img`
  max-width: 100%;
`;

const CityName = styled.h1`
  position: absolute;
  top: 0px;
  font-size: 2rem;
  color: #ffff00;
  display: inline-block;
  padding: 20px 10px;
  background: #000;
  text-transform: uppercase;
`;

export { NavBar, CityName, HomeLink, HomeImage };
