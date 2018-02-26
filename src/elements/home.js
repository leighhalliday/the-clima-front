import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: #ff057c;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
`;

const Form = styled.form`
  padding-top: 40vh;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 50px;

  @media (max-width: 810px) {
    width: 90%;
  }
`;

const Label = styled.label`
  display: block;
  padding-bottom: 1rem;
  font-size: 2rem;
  color: #ffffff;
`;

const NearbyCities = styled.ul`
  display: flex;
  justify-content: center;
`;

const NearbyCity = styled.li`
  padding: 0.5rem;
  text-align: left;
  background-color: transparent;
  transition: background-color 1s ease;

  &:hover {
    background-color: #000;
  }
`;

const NearbyLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const autoComplete = {
  root: {
    position: "relative",
    paddingBottom: "0px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  },
  input: {
    display: "inline-block",
    width: "100%",
    padding: "15px",
    height: "50px",
    border: "none",
    outlineColor: "#ffff00",
    fontFamily: "Barlow Condensed, sans-serif",
    fontSize: "1.5rem",
    color: "#866667"
  },
  autocompleteContainer: {
    position: "absolute",
    top: "100%",
    backgroundColor: "white",
    border: "1px solid #555555",
    width: "100%"
  },
  autocompleteItem: {
    backgroundColor: "#fff",
    padding: "10px",
    color: "#555555",
    cursor: "pointer"
  },
  autocompleteItemActive: {
    color: "#fff",
    backgroundColor: "#000"
  }
};

const Logo = styled.img`
  width: 200px;
  position: absolute;
  top: 25px;
  right: 50px;
`;

export {
  Container,
  Form,
  Label,
  NearbyCities,
  NearbyCity,
  NearbyLink,
  autoComplete,
  Logo
};
